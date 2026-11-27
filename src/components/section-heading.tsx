export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.12em] text-brand">{eyebrow}</p><h2 className="mt-2 text-3xl font-bold leading-[1.08] md:text-5xl">{title}</h2>{copy && <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p>}</div>;
}
