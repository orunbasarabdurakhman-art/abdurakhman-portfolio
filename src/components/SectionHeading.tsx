import { Reveal } from './Reveal';

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan/80">
        <span className="text-neon-blue/80">{kicker}</span>
        <span className="h-px w-10 bg-gradient-to-r from-neon-blue/70 to-transparent" />
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 md:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
