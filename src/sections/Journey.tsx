import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { journey } from '../data/content';

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading kicker="04 / Path" title="Жолы" />

      <div className="relative ml-2 border-l border-white/10 pl-8 sm:ml-4 sm:pl-12">
        <div className="absolute bottom-0 left-[-1px] top-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent" />

        <ol className="space-y-8">
          {journey.map((item, index) => (
            <li key={`${item.year}-${item.title}`}>
              <Reveal delay={index * 90}>
                <article className="relative">
                  <span className="absolute -left-[2.35rem] top-5 h-3.5 w-3.5 rounded-full border border-neon-cyan/70 bg-ink-950 shadow-[0_0_18px_rgba(92,225,230,0.7)] sm:-left-[3.35rem]" />
                  <div className="glass glass-hover rounded-2xl p-5 sm:p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-neon-cyan">
                      {item.year}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
