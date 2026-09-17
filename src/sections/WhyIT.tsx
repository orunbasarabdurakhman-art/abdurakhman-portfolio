import { Code2, Lightbulb, Network, Rocket, Wrench } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { whyIt } from '../data/content';

const icons = [Lightbulb, Code2, Rocket, Network, Wrench];

export function WhyIT() {
  return (
    <section id="why-it" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading
        kicker="05 / Motive"
        title="Неге IT?"
        description="Ақпараттық технологияны таңдадым, себебі ол қызығушылықты, логиканы және пайдалы нәрсе жасау мүмкіндігін біріктіреді."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyIt.map((item, index) => {
          const Icon = icons[index];
          return (
            <Reveal
              key={item.title}
              delay={index * 70}
              className={index === 4 ? 'sm:col-span-2 lg:col-span-1' : undefined}
            >
              <article className="glass glass-hover h-full rounded-2xl p-6">
                <span className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5 text-neon-purple">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
