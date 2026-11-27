import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export default function About() {
  return <main>
    <PageHero eyebrow="About Tropical Consulting Ltd" title="International outlook." accent="Mauritius presence." emoji="🌍" copy="Tropical Consulting Ltd is based in Mauritius and forms part of an international group. Our work is grounded in people, reliable service and a commitment to doing things well." />
    <section className="section"><div className="container grid items-start gap-12 md:grid-cols-2">
      <Reveal><SectionHeading eyebrow="Who we are" title="Local talent. Shared ambition." copy="Being part of an international group connects our local team to a wider network, shared experience and common standards." /></Reveal>
      <Reveal delay={120}><div className="card bg-sun p-8"><h2 className="text-3xl font-extrabold">Our commitment</h2><p className="mt-4 leading-7">We believe great service starts with people who feel supported, equipped and empowered to make a difference. We aim to create an environment where quality, collaboration and continuous learning can thrive.</p></div></Reveal>
    </div></section>
  </main>;
}
