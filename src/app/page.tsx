import Link from "next/link";
import { ArrowRight, Globe2, Users2, Sparkles, Headphones, MapPin, Camera } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { getApprovedPhotos } from "@/lib/gallery";
import { services } from "@/lib/content";

const why = [
  { icon: Globe2, label: "International perspective" },
  { icon: Users2, label: "People first" },
  { icon: Sparkles, label: "Service excellence" },
  { icon: Headphones, label: "Customer support, 24/7" }
];
const tileBg = ["bg-[#CFDCFF]", "bg-[#FFE3B8]", "bg-[#C5F0DF]"];

export default async function Home() {
  const photos = await getApprovedPhotos(4);
  const hero = photos[0];
  const strip = photos.slice(1, 4);
  return <main>
    <section className="container grid items-center gap-10 pb-10 pt-12 md:pt-20 lg:grid-cols-[1.15fr_.85fr]">
      <div>
        <span className="eyebrow"><span className="h-2 w-2 rounded-full bg-[#22C58B]" />Tropical Consulting Ltd · Mauritius</span>
        <h1 className="mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">Customer support, <span className="text-brand">around the clock.</span></h1>
        <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">We are a Mauritius-based team, part of an international group, delivering service excellence with people at the centre.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/what-we-do" className="btn btn-primary">What we do <ArrowRight size={16} /></Link>
          <Link href="/about" className="btn btn-outline">About TCL</Link>
        </div>
      </div>
      <div className="relative mx-auto h-[300px] w-full max-w-md sm:h-[340px]">
        <div className="absolute right-0 top-0 h-[78%] w-[82%] overflow-hidden rounded-[28px] bg-[#CFDCFF]">
          {hero && hero.url ? <img src={hero.url} alt={hero.caption || "TCL team"} className="h-full w-full object-cover" /> : <div className="flex h-full w-full items-center justify-center gap-2 text-sm text-ink/70"><Camera size={18} />Team photo</div>}
        </div>
        <div className="animate-float absolute bottom-0 left-0 rounded-2xl bg-ink px-5 py-4 text-white"><p className="text-3xl font-bold tracking-tight">24/7</p><p className="mt-1 text-xs text-white/60">Customer support</p></div>
        <div className="absolute bottom-2 right-3 flex items-center gap-2 rounded-2xl border border-line bg-white px-4 py-2.5 text-sm font-semibold"><MapPin size={16} className="text-brand" />Mauritius</div>
      </div>
    </section>

    <section className="container py-3">
      <Reveal><div className="card p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[.12em] text-brand">What we do</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Support that keeps people connected</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <div key={s.title} className={`rounded-2xl p-5 ${s.bg}`}><s.icon size={22} className={s.fg} /><h3 className="mt-5 text-base font-bold">{s.title}</h3><p className="mt-1.5 text-sm leading-6 text-slate-600">{s.short}</p></div>)}
        </div>
      </div></Reveal>
    </section>

    <section className="container grid gap-4 py-3 md:grid-cols-2">
      <Reveal className="h-full"><div className="h-full rounded-3xl bg-ink p-7 text-white md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#6C8CFF]">About TCL</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight">International outlook. Mauritius presence.</h2>
        <p className="mt-4 text-sm leading-7 text-white/65">Part of an international group, our local team shares its standards, experience and ambition.</p>
        <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6C8CFF]">Read our story <ArrowRight size={16} /></Link>
      </div></Reveal>
      <Reveal delay={100} className="h-full"><div className="card h-full p-7 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[.12em] text-brand">Why TCL</p>
        <div className="mt-5 grid gap-4">
          {why.map((w) => <div key={w.label} className="flex items-center gap-3 text-base font-semibold"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky text-brand"><w.icon size={20} /></span>{w.label}</div>)}
        </div>
      </div></Reveal>
    </section>

    <section className="container py-3">
      <Reveal><div className="card grid items-center gap-5 p-5 md:grid-cols-[.8fr_repeat(3,1fr)] md:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.12em] text-brand">Life at TCL</p>
          <h2 className="mt-2 text-xl font-bold leading-snug">Good people make great moments</h2>
          <Link href="/gallery" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">See the gallery <ArrowRight size={15} /></Link>
        </div>
        {[0, 1, 2].map((i) => <div key={i} className={`h-24 overflow-hidden rounded-2xl md:h-28 ${tileBg[i]}`}>{strip[i] && strip[i].url ? <img src={strip[i].url} alt={strip[i].caption || "TCL moment"} className="h-full w-full object-cover" /> : null}</div>)}
      </div></Reveal>
    </section>

    <section className="container py-3">
      <Reveal><div className="flex flex-col justify-between gap-6 rounded-3xl bg-brand p-7 text-white md:flex-row md:items-center md:p-9">
        <div><h2 className="text-2xl font-bold md:text-3xl">Bring your energy. Build what’s next.</h2><p className="mt-2 text-sm text-white/75">Explore opportunities to grow with TCL.</p></div>
        <Link href="/careers" className="btn bg-white text-ink">Explore careers <ArrowRight size={16} /></Link>
      </div></Reveal>
    </section>
  </main>;
}
