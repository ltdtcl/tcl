export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-2xl"><span className="eyebrow">{eyebrow}</span><h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">{title}</h2>{copy && <p className="mt-5 text-base leading-7 text-slate-700">{copy}</p>}</div>;
}
