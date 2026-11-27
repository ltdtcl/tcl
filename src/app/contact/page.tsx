import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export default function Contact() {
  return <main>
    <PageHero eyebrow="Contact" title="Let's start a" accent="conversation." copy="Have a question about Tropical Consulting Ltd? Reach out and our team will be happy to help." />
    <section className="container grid gap-4 py-8 md:grid-cols-2">
      <Reveal className="h-full"><div className="card h-full p-8"><h2 className="text-2xl font-bold">Get in touch</h2><p className="mt-4 leading-7 text-slate-600">For general enquiries, please email our team. Add the verified office address and official phone number here before publishing.</p><a className="btn btn-primary mt-7" href="mailto:info@tropicalconsultingltd.com">Email TCL</a></div></Reveal>
      <Reveal delay={100} className="h-full"><div className="h-full rounded-3xl bg-sky p-8"><span className="eyebrow">Mauritius</span><h3 className="mt-5 text-3xl font-bold leading-tight">Local presence.<br />International connection.</h3><p className="mt-4 text-sm leading-6 text-slate-600">TODO: TCL CONTENT — Insert verified office address, telephone number and business hours if publicly appropriate.</p></div></Reveal>
    </section>
  </main>;
}
