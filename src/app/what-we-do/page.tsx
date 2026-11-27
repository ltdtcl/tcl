import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/content";

export default function WhatWeDo() {
  return <main>
    <PageHero eyebrow="What we do" title="Support that keeps the world" accent="connected." copy="We deliver customer support and service excellence around the clock, with people at the heart of every interaction." />
    <section className="container grid gap-4 py-8 md:grid-cols-2">
      {services.map((s, i) => <Reveal key={s.title} delay={(i % 2) * 100} className="h-full"><article className={`h-full rounded-3xl p-8 ${s.bg}`}><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white"><s.icon size={24} className={s.fg} /></span><p className="mt-6 text-sm font-semibold text-slate-500">0{i + 1}</p><h2 className="mt-1 text-2xl font-bold">{s.title}</h2><p className="mt-3 max-w-md leading-7 text-slate-700">{s.copy}</p></article></Reveal>)}
    </section>
  </main>;
}
