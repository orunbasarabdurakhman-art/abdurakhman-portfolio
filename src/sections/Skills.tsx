import {
  Binary,
  Braces,
  Brain,
  Code2,
  FileCode2,
  GitBranch,
  Github,
  Palette,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { skills, type SkillLevel } from '../data/content';
import { cn } from '../lib/cn';

const skillIcons = {
  Python: FileCode2,
  HTML: Code2,
  CSS: Palette,
  JavaScript: Braces,
  Git: GitBranch,
  GitHub: Github,
  'AI Tools': Sparkles,
  'Problem Solving': Brain,
  Algorithms: Binary,
} as const;

const levelStyles: Record<SkillLevel, string> = {
  Learning: 'border-sky-400/25 bg-sky-400/10 text-sky-200',
  Developing: 'border-violet-400/25 bg-violet-400/10 text-violet-200',
  Familiar: 'border-teal-400/25 bg-teal-400/10 text-teal-200',
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading
        kicker="02 / Skills"
        title="What I'm building"
        description="Honest progress — not a fake expert stack. These are the tools and ways of thinking I practice every week."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {(['Learning', 'Developing', 'Familiar'] as SkillLevel[]).map((level) => (
          <span
            key={level}
            className={cn('rounded-full border px-3 py-1 text-xs', levelStyles[level])}
          >
            {level}
          </span>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skillIcons[skill.name as keyof typeof skillIcons] ?? Code2;
          return (
            <Reveal key={skill.name} delay={index * 50}>
              <article className="glass glass-hover group h-full rounded-2xl p-5">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-neon-cyan transition group-hover:border-neon-blue/40 group-hover:shadow-glow">
                    <Icon size={18} />
                  </span>
                  <span
                    className={cn(
                      'rounded-full border px-2.5 py-1 text-[11px] font-medium',
                      levelStyles[skill.level],
                    )}
                  >
                    {skill.level}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{skill.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                  {skill.group}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{skill.note}</p>
                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">
                  <div
                    className={cn(
                      'h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple',
                      skill.level === 'Developing' && 'w-2/3',
                      skill.level === 'Learning' && 'w-2/5',
                      skill.level === 'Familiar' && 'w-1/2',
                    )}
                  />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
