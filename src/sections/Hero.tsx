import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { TerminalCard } from '../components/TerminalCard';
import { StatusBadge } from '../components/StatusBadge';
import { Reveal } from '../components/Reveal';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28">
        <div>
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <StatusBadge />
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                Kazakhstan · Ibilim High School
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-neon-cyan/80">
              Student Developer
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[4.1rem]">
              Hi, I&apos;m <span className="text-gradient">Abdurakhman</span> 👋
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 font-display text-xl text-slate-200 sm:text-2xl">
              16-year-old Student Developer
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              I study at Ibilim High School and chose the Informatics & Mathematics direction.
              I&apos;m passionate about programming, technology and building useful digital solutions.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                View My Projects
                <ArrowDownRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-neon-cyan/40 hover:bg-white/10"
              >
                Contact Me
                <ArrowUpRight size={16} />
              </a>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/10 pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Age</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">16</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">School</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">Ibilim</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Track</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">IT + Math</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 blur-2xl" />
          <div className="pointer-events-none absolute -right-6 -top-6 hidden h-28 w-28 rounded-full border border-dashed border-neon-cyan/20 animate-orbit lg:block" />
          <TerminalCard />
        </Reveal>
      </div>
    </section>
  );
}
