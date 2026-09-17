import { useEffect } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export function Background() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const onMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
      document.documentElement.style.setProperty('--my', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced]);

  return (
    <>
      <div className="site-bg" />
      <div className="site-grid" />
      <div className="site-noise" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-neon-blue/10 blur-3xl animate-float" />
        <div className="absolute right-[-4rem] top-40 h-80 w-80 rounded-full bg-neon-purple/12 blur-3xl animate-float [animation-delay:1.4s]" />
        <p className="absolute left-[8%] top-[18%] hidden font-mono text-[11px] text-cyan-200/20 lg:block">
          {'const future = "software engineer";'}
        </p>
        <p className="absolute bottom-[18%] right-[10%] hidden font-mono text-[11px] text-violet-200/20 lg:block">
          {'while (curious) learn();'}
        </p>
      </div>
    </>
  );
}
