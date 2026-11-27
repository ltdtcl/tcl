import { Headphones, Clock3, HeartHandshake, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

const items = [
  { icon: Headphones, title: "Customer support", copy: "Thoughtful, helpful and professional customer interactions across every touchpoint.", bg: "bg-sky" },
  { icon: Clock3, title: "Always-on service", copy: "A 24/7 operating mindset designed around continuity, responsiveness and reliability.", bg: "bg-sun" },
  { icon: HeartHandshake, title: "Customer experience", copy: "A people-first approach that puts understanding, clarity and care at the centre.", bg: "bg-mint" },
  { icon: TrendingUp, title: "Continuous improvement", copy: "Learning from feedback, strengthening processes and raising service standards over time.", bg: "bg-coral" }
];

export default function WhatWeDo() {
  return <main>
    <PageHero eyebrow="What we do" title="Support that keeps the world" accent="connected." bg="bg-sky" emoji="🎧" copy="We deliver customer support and service excellence around the clock, with people at the heart of every interaction." />
    <section className="section"><div className="container grid gap-6 md:grid-cols-2">
      {items.map((x, i) => <Reveal key={x.title} delay={(i % 2) * 100} className="h-full"><article className={`card h-full p-8 transition-transform hover:-translate-y-2 ${x.bg}`}><div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink bg-white"><x.icon size={28} /></div><p className="mt-6 font-display text-sm font-extrabold">0{i + 1}</p><h2 className="mt-1 text-3xl font-extrabold">{x.title}</h2><p className="mt-3 max-w-lg leading-7">{x.copy}</p></article></Reveal>)}
    </div></section>
  </main>;
}
