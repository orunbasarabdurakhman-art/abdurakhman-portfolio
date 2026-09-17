import { GraduationCap, Cpu, Calendar, Compass } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { Portrait } from '../components/Portrait';
import { aboutFacts } from '../data/content';

const icons = [Calendar, GraduationCap, Compass, Cpu];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading kicker="01 / About" title="Мен туралы" />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:gap-14">
        <Reveal>
          <Portrait className="mx-auto aspect-[4/5] max-h-[420px] w-full max-w-sm lg:max-h-none" />
        </Reveal>

        <div className="space-y-6">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              Мен — Ibilim мектебінің 16 жастағы оқушысымын. Ақпараттық технологияға қызығамын.
              Информатика мен математика бағытын таңдадым, себебі мәселелерді шешкенді,
              бағдарламалауды үйренгенді және технологияның қалай жұмыс істейтінін түсінгенді ұнатамын.
            </p>
            <p className="text-slate-400">
              Мақсатым — бағдарламалау дағдыларымды үнемі жетілдіру, нақты жобалар жасау және
              болашақта кәсіби software engineer болу.
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
      </div>
    </section>
  );
}
