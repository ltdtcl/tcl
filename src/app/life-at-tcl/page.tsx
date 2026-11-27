import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

const values = [
  ["Belonging", "We value a welcoming environment where people can contribute and feel part of a team.", "bg-[#EAF0FF]"],
  ["Growth", "We encourage learning, curiosity and the confidence to take on new challenges.", "bg-[#DDF5EA]"],
  ["Togetherness", "We make space to celebrate milestones, share experiences and build relationships.", "bg-[#FFF1D6]"]
];

export default function Life() {
  return <main>
    <PageHero eyebrow="Life at TCL" title="A place to connect." accent="A team to grow with." copy="Our culture is shaped by the people around us: their ideas, their support for one another and the moments we create together.">
      <Link className="btn btn-primary" href="/gallery">See life in pictures</Link>
    </PageHero>
    <section className="container grid gap-4 py-8 md:grid-cols-3">
      {values.map(([t, c, bg], i) => <Reveal key={t} delay={i * 100} className="h-full"><div className={`h-full rounded-3xl p-8 ${bg}`}><h2 className="text-2xl font-bold">{t}</h2><p className="mt-3 leading-7 text-slate-700">{c}</p></div></Reveal>)}
    </section>
  </main>;
}
