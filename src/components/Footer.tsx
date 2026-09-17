import { StatusBadge } from './StatusBadge';

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="text-sm text-slate-400">© 2026 Abdurakhman. Код пен қызығушылықпен жасалды.</p>
        <StatusBadge compact />
      </div>
    </footer>
  );
}
