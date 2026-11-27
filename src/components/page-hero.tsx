import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, accent, copy, bg = "bg-mist", emoji, children }: { eyebrow: string; title: string; accent: string; copy: string; bg?: string; emoji?: string; children?: ReactNode }) {
  return <section className={`relative overflow-hidden border-b-2 border-ink ${bg}`}>
    <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sun/70 blur-2xl" />
    <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-mint/40 blur-3xl" />
    {emoji && <span aria-hidden className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 animate-float text-[9rem] md:block">{emoji}</span>}
    <div className="container relative py-20 md:py-28">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1] tracking-tight md:text-7xl">{title} <span className="hl">{accent}</span></h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{copy}</p>
      {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
    </div>
  </section>;
}
