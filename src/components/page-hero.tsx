import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, accent, copy, children }: { eyebrow: string; title: string; accent: string; copy: string; children?: ReactNode }) {
  return <section className="container pb-6 pt-14 md:pt-20">
    <span className="eyebrow"><span className="h-2 w-2 rounded-full bg-[#22C58B]" />{eyebrow}</span>
    <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] md:text-7xl">{title} <span className="text-brand">{accent}</span></h1>
    <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{copy}</p>
    {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
  </section>;
}
