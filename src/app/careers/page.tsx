import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export default function Careers() {
  return <main>
    <PageHero eyebrow="Careers at TCL" title="Your next opportunity starts with" accent="people." copy="Join a Mauritius-based team connected to an international group. Bring your perspective, develop your skills and help deliver great customer experiences.">
      <a className="btn btn-primary" href="mailto:careers@tropicalconsultingltd.com?subject=Career%20enquiry">Send a career enquiry</a>
    </PageHero>
    <section className="container py-8">
      <Reveal><div className="rounded-3xl bg-ink p-8 text-white md:p-12">
        <h2 className="text-3xl font-bold md:text-4xl">Interested in joining us?</h2>
        {/* TODO: TCL CONTENT — replace with the official recruitment application process before launch */}
        <p className="mt-4 max-w-2xl leading-7 text-white/70">Get in touch with our team to learn about opportunities and what it is like to work at TCL.</p>
        <Link className="btn mt-7 bg-white text-ink" href="/contact">Contact TCL</Link>
      </div></Reveal>
    </section>
  </main>;
}
