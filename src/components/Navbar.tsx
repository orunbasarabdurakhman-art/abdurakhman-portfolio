import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/content';
import { StatusBadge } from './StatusBadge';
import { cn } from '../lib/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-[#05070d]/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8',
          scrolled ? 'h-14' : 'h-[4.5rem]',
        )}
        aria-label="Primary"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-display text-[15px] font-bold tracking-tight text-white sm:text-lg"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-neon-blue/30 bg-neon-blue/10 text-sm text-neon-cyan transition group-hover:border-neon-cyan/50 group-hover:shadow-glow">
            A
          </span>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <StatusBadge compact />
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn('md:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')}
      >
        <button
          type="button"
          className={cn(
            'fixed inset-0 top-14 bg-black/55 backdrop-blur-sm transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          )}
          aria-label="Close menu overlay"
          onClick={close}
        />
        <div
          className={cn(
            'absolute inset-x-4 top-full origin-top rounded-2xl border border-white/10 bg-ink-800/95 p-3 shadow-card backdrop-blur-xl transition-all',
            open ? 'translate-y-2 scale-100 opacity-100' : 'translate-y-0 scale-95 opacity-0',
          )}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base text-slate-200 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-3 pt-1">
            <StatusBadge />
          </div>
        </div>
      </div>
    </header>
  );
}
