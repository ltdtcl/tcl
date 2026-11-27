import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export default function Careers() {
  return <main>
    <PageHero eyebrow="Careers at TCL" title="Your next opportunity starts with" accent="people." bg="bg-sun/40" emoji="🚀" copy="Join a Mauritius-based team connected to an international group. Bring your perspective, develop your skills and help deliver great customer experiences.">
      <a className="btn btn-primary" href="mailto:careers@tropicalconsultingltd.com?subject=Career%20enquiry">Send a career enquiry ↗</a>
    </PageHero>
    <section className="section"><div className="container">
      <Reveal><div className="card bg-ink p-8 text-white md:p-12">
        <h2 className="text-4xl font-extrabold md:text-5xl">Interested in joining us?</h2>
        {/* TODO: TCL CONTENT — replace with the official recruitment application process before launch */}
        <p className="mt-4 max-w-2xl leading-7 text-white/80">Get in touch with our team to learn about opportunities and what it is like to work at TCL.</p>
        <Link className="btn btn-primary mt-7" href="/contact">Contact TCL</Link>
      </div></Reveal>
    </div></section>
  </main>;
}
