import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export default function Contact() {
  return <main>
    <PageHero eyebrow="Contact" title="Let's start a" accent="conversation." bg="bg-sky" emoji="💬" copy="Have a question about Tropical Consulting Ltd? Reach out and our team will be happy to help." />
    <section className="section"><div className="container grid gap-10 md:grid-cols-2">
      <Reveal><h2 className="text-3xl font-extrabold">Get in touch</h2><p className="mt-4 leading-7 text-slate-700">For general enquiries, please email our team. Add the verified office address and official phone number here before publishing.</p><a className="btn btn-primary mt-7" href="mailto:info@tropicalconsultingltd.com">Email TCL ↗</a></Reveal>
      <Reveal delay={120}><div className="card bg-mint p-8"><span className="eyebrow">Mauritius</span><h3 className="mt-4 text-3xl font-extrabold">Local presence.<br />International connection.</h3><p className="mt-4 text-sm leading-6">TODO: TCL CONTENT — Insert verified office address, telephone number and business hours if publicly appropriate.</p></div></Reveal>
    </div></section>
  </main>;
}
