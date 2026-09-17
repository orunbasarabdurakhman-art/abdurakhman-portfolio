export function StatusBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/5 text-teal-200 ${
        compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-mint status-ring" />
      </span>
      Currently learning
    </span>
  );
}
