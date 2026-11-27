import { Globe2, Users2, Sparkles, Headphones } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const values = [
  { icon: Globe2, t: "International perspective", c: "Part of an international group, connected by shared ambition and standards." },
  { icon: Users2, t: "People first", c: "Our people bring care, curiosity and commitment to every interaction." },
  { icon: Sparkles, t: "Service excellence", c: "A culture of learning, accountability and continuous improvement." },
  { icon: Headphones, t: "Customer support, 24/7", c: "Reliable, thoughtful support that keeps people connected whenever they need us." }
];

export default function About() {
  return <main>
    <PageHero eyebrow="About Tropical Consulting Ltd" title="International outlook." accent="Mauritius presence." copy="Tropical Consulting Ltd is based in Mauritius and forms part of an international group. Our work is grounded in people, reliable service and a commitment to doing things well." />
    <section className="container grid gap-4 py-8 md:grid-cols-2">
      <Reveal className="h-full"><div className="card h-full p-8"><SectionHeading eyebrow="Who we are" title="Local talent. Shared ambition." copy="Being part of an international group connects our local team to a wider network, shared experience and common standards." /></div></Reveal>
      <Reveal delay={100} className="h-full"><div className="h-full rounded-3xl bg-ink p-8 text-white"><h2 className="text-3xl font-bold">Our commitment</h2><p className="mt-4 leading-7 text-white/70">We believe great service starts with people who feel supported, equipped and empowered to make a difference. We aim to create an environment where quality, collaboration and continuous learning can thrive.</p></div></Reveal>
    </section>
    <section className="container grid gap-4 pb-8 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((v, i) => <Reveal key={v.t} delay={i * 80} className="h-full"><div className="card h-full p-6"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky text-brand"><v.icon size={22} /></span><h3 className="mt-5 text-lg font-bold">{v.t}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{v.c}</p></div></Reveal>)}
    </section>
  </main>;
}
