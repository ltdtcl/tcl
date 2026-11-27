import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

const values = [
  ["Belonging", "We value a welcoming environment where people can contribute and feel part of a team.", "bg-sun", "🤝"],
  ["Growth", "We encourage learning, curiosity and the confidence to take on new challenges.", "bg-mint", "🌱"],
  ["Togetherness", "We make space to celebrate milestones, share experiences and build relationships.", "bg-coral", "🎉"]
];

export default function Life() {
  return <main>
    <PageHero eyebrow="Life at TCL" title="A place to connect." accent="A team to grow with." bg="bg-mist" emoji="🎉" copy="Our culture is shaped by the people around us: their ideas, their support for one another and the moments we create together.">
      <Link className="btn btn-primary" href="/gallery">See life in pictures ↗</Link>
    </PageHero>
    <section className="section"><div className="container grid gap-6 md:grid-cols-3">
      {values.map(([t, c, bg, e], i) => <Reveal key={t} delay={i * 100} className="h-full"><div className={`card h-full p-7 transition-transform hover:-translate-y-2 hover:-rotate-1 ${bg}`}><span className="text-5xl" aria-hidden>{e}</span><h2 className="mt-5 text-3xl font-extrabold">{t}</h2><p className="mt-3 leading-7">{c}</p></div></Reveal>)}
    </div></section>
  </main>;
}
