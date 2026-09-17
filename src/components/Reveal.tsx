import type { ReactNode } from 'react';
import { cn } from '../lib/cn';
import { useReveal } from '../hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(delay);

  return (
    <div ref={ref} className={cn('reveal', visible && 'is-visible', className)}>
      {children}
    </div>
  );
}
