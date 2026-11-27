export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return <div className="relative z-10 -my-2 -rotate-1 overflow-hidden border-y-2 border-ink bg-sun py-4" aria-hidden>
    <div className="flex w-max animate-marquee">
      {row.map((t, i) => <span key={i} className="pr-10 font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl">{t} <span className="ml-10 text-coral">✺</span></span>)}
    </div>
  </div>;
}
