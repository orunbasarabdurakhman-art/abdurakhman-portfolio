import { useEffect, useMemo, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

type Line =
  | { kind: 'command'; value: string }
  | { kind: 'output'; value: string }
  | { kind: 'blank' };

const SCRIPT: Line[] = [
  { kind: 'command', value: 'whoami' },
  { kind: 'output', value: 'abdurakhman' },
  { kind: 'blank' },
  { kind: 'command', value: 'age' },
  { kind: 'output', value: '16' },
  { kind: 'blank' },
  { kind: 'command', value: 'school' },
  { kind: 'output', value: 'Ibilim High School' },
  { kind: 'blank' },
  { kind: 'command', value: 'focus' },
  { kind: 'output', value: 'Programming + IT' },
];

function lineText(line: Line) {
  if (line.kind === 'command') return `$ ${line.value}`;
  if (line.kind === 'output') return line.value;
  return '';
}

export function TerminalCard() {
  const reduced = usePrefersReducedMotion();
  const fullText = useMemo(
    () => SCRIPT.map((line) => lineText(line)).join('\n'),
    [],
  );
  const [charCount, setCharCount] = useState(reduced ? fullText.length : 0);

  useEffect(() => {
    if (reduced) {
      setCharCount(fullText.length);
      return;
    }

    setCharCount(0);
    let index = 0;
    let timer: number;

    const tick = () => {
      index += 1;
      setCharCount(index);
      if (index >= fullText.length) return;

      const current = fullText[index - 1];
      const pause = current === '\n' ? 180 : 28;
      timer = window.setTimeout(tick, pause);
    };

    timer = window.setTimeout(tick, 500);
    return () => window.clearTimeout(timer);
  }, [fullText, reduced]);

  const visible = fullText.slice(0, charCount);
  const done = charCount >= fullText.length;

  return (
    <aside
      className="glass scanline relative w-full max-w-md overflow-hidden rounded-2xl shadow-glow"
      aria-label="Developer terminal"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <p className="ml-2 truncate font-mono text-[11px] text-slate-400">abdurakhman — zsh</p>
      </div>
      <pre className="min-h-[280px] whitespace-pre-wrap px-5 py-5 font-mono text-[13px] leading-7 text-slate-200 sm:min-h-[300px] sm:text-sm">
        {visible.split('\n').map((line, index, all) => {
          const isLast = index === all.length - 1;
          const isCommand = line.startsWith('$ ');
          const isOutput = line.length > 0 && !isCommand;

          return (
            <span key={`${line}-${index}`} className="block">
              {isCommand ? (
                <>
                  <span className="text-neon-cyan">$ </span>
                  <span className="text-slate-100">{line.slice(2)}</span>
                </>
              ) : isOutput ? (
                <span className="text-neon-purple">{line}</span>
              ) : (
                <span>&nbsp;</span>
              )}
              {isLast && !done ? <span className="cursor-blink" /> : null}
            </span>
          );
        })}
        {done ? (
          <span className="block">
            <span className="text-neon-cyan">$ </span>
            <span className="cursor-blink" />
          </span>
        ) : null}
      </pre>
    </aside>
  );
}
