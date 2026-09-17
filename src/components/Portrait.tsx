import { cn } from '../lib/cn';

type PortraitProps = {
  className?: string;
  imgClassName?: string;
};

export function Portrait({ className, imgClassName }: PortraitProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 shadow-glow',
        className,
      )}
    >
      <img
        src="/abdurakhman.jpg"
        alt="Abdurakhman, Ibilim мектебінің оқушысы"
        className={cn('h-full w-full object-cover object-[center_18%]', imgClassName)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070d]/75 via-transparent to-cyan-200/5" />
    </div>
  );
}
