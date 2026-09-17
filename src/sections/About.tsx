import { GraduationCap, Cpu, Calendar, Compass } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { aboutFacts } from '../data/content';

const icons = [Calendar, GraduationCap, Compass, Cpu];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading kicker="01 / About" title="About Me" />

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <Reveal className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
          <p>
            I&apos;m a 16-year-old student at Ibilim High School with a strong interest in
            information technology. I chose the Informatics & Mathematics direction because I enjoy
            solving problems, learning programming and understanding how technology works.
          </p>
          <p className="text-slate-400">
            My goal is to continuously improve my programming skills, create real projects and
            eventually become a professional software engineer.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {aboutFacts.map((fact, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={fact.label} delay={index * 80}>
                <article className="glass glass-hover h-full rounded-2xl p-4">
                  <Icon size={18} className="mb-3 text-neon-cyan" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {fact.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">{fact.value}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
