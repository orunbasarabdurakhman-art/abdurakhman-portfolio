import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { projects } from '../data/content';

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading
        kicker="03 / Work"
        title="Таңдаулы жобалар"
        description="Концепт пен практиканың қоспасы. Карточкалар нақты репозиторийлерге дайын — код жарияланғанда placeholder-ларды ауыстыруға болады."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 80}>
            <article className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="relative h-32 overflow-hidden border-b border-white/10">
                <div
                  className={`absolute inset-0 opacity-80 ${
                    index === 0
                      ? 'bg-[radial-gradient(circle_at_20%_20%,rgba(77,159,255,0.45),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(139,124,255,0.4),transparent_40%),#0b1220]'
                      : index === 1
                        ? 'bg-[radial-gradient(circle_at_70%_20%,rgba(92,225,230,0.35),transparent_42%),radial-gradient(circle_at_20%_80%,rgba(77,159,255,0.35),transparent_40%),#0b1220]'
                        : 'bg-[radial-gradient(circle_at_50%_30%,rgba(192,132,252,0.38),transparent_45%),radial-gradient(circle_at_10%_80%,rgba(77,159,255,0.28),transparent_40%),#0b1220]'
                  }`}
                />
                <div className="absolute inset-0 bg-grid-fade bg-[size:18px_18px] opacity-40" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-200 backdrop-blur">
                  {project.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-2">
                  <a
                    href={project.github}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white transition hover:border-neon-blue/40 hover:bg-white/10"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-2.5 text-sm text-cyan-100 transition hover:bg-neon-cyan/20"
                    >
                      <ExternalLink size={15} />
                      Demo
                    </a>
                  ) : (
                    <span className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/5 px-3 py-2.5 text-sm text-slate-500">
                      Демо жақында
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
