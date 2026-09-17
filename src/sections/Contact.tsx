import { Github, Instagram, Mail, Send } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { socials } from '../data/content';

const icons = {
  GitHub: Github,
  Telegram: Send,
  Instagram: Instagram,
  Email: Mail,
} as const;

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-neon-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-neon-purple/15 blur-3xl" />

        <SectionHeading kicker="06 / Contact" title="Бірге жасайық" />

        <Reveal>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Идея, жоба немесе міндет бар ма? Байланысайық та, қызықты нәрсе жасайық.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((social, index) => {
            const Icon = icons[social.name];
            return (
              <Reveal key={social.name} delay={index * 70}>
                <a
                  href={social.href}
                  className="glass-hover group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-neon-cyan transition group-hover:bg-neon-blue/15">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{social.name}</span>
                    <span className="block text-xs text-slate-500">{social.label}</span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
