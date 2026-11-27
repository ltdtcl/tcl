import Link from "next/link";
import type { CSSProperties } from "react";
import { Headphones, Globe2, Users2, Sparkles, ArrowUpRight, Clock3 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { RotatingWord } from "@/components/rotating-word";
import { CountUp } from "@/components/count-up";
import { Marquee } from "@/components/marquee";
import { getApprovedPhotos, type GalleryPhoto } from "@/lib/gallery";

const pillars = [
  { icon: Globe2, title: "International perspective", copy: "Part of an international group, connected by shared ambition and standards.", bg: "bg-sky" },
  { icon: Headphones, title: "Customer support, 24/7", copy: "Reliable, thoughtful support that keeps people connected whenever they need us.", bg: "bg-sun" },
  { icon: Users2, title: "People first", copy: "Our people bring care, curiosity and commitment to every interaction.", bg: "bg-mint" },
  { icon: Sparkles, title: "Service excellence", copy: "A culture of learning, accountability and continuous improvement.", bg: "bg-coral" }
];
const stats = [{ n: 24, l: "hours a day" }, { n: 7, l: "days a week" }, { n: 365, l: "days a year" }];
const tilt = (deg: number) => ({ "--r": `${deg}deg`, transform: `rotate(${deg}deg)` }) as CSSProperties;

export default async function Home() {
  const photos = await getApprovedPhotos(4);
  const tiles: (GalleryPhoto | null)[] = photos.length ? photos.slice(0, 4) : [null, null];
  return <>
    <section className="relative overflow-hidden bg-mist">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sun/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-grape/25 blur-3xl" />
      <div className="container relative grid items-center gap-14 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
        <div>
          <span className="eyebrow">🌴 Mauritius · Global group</span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[.98] tracking-tight sm:text-6xl lg:text-8xl">More than support.<br />A global <span className="hl"><RotatingWord words={["mindset", "energy", "team", "vibe"]} /></span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-700">Tropical Consulting Ltd brings people and service together from Mauritius, delivering customer support and service excellence around the clock.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link className="btn btn-primary" href="/careers">Join the crew <ArrowUpRight size={18} /></Link>
            <Link className="btn btn-outline" href="/what-we-do">Discover TCL</Link>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm font-bold"><span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-white"><Clock3 size={20} /></span> Here for customers, 24 hours a day · 7 days a week</div>
        </div>
        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:max-w-lg">
          <div style={tilt(3)} className="animate-float card col-span-2 bg-ocean p-6 text-white"><Headphones size={34} /><p className="mt-4 font-display text-6xl font-extrabold">24/7</p><p className="font-bold text-white/80">Customer support</p></div>
          <div style={tilt(-4)} className="animate-float card bg-sun p-5"><Users2 size={28} /><p className="mt-3 font-display text-2xl font-extrabold leading-tight">People first</p></div>
          <div style={tilt(4)} className="animate-float card bg-mint p-5"><Globe2 size={28} /><p className="mt-3 font-display text-2xl font-extrabold leading-tight">Made in Mauritius</p></div>
        </div>
      </div>
    </section>

    <Marquee items={["Customer support", "24/7", "People first", "Service excellence", "Made in Mauritius", "Global mindset"]} />

    <section className="section pt-24">
      <div className="container grid gap-6 sm:grid-cols-3">
        {stats.map((s, i) => <Reveal key={s.l} delay={i * 100} className="h-full"><div className="card h-full p-8 text-center"><p className="font-display text-7xl font-extrabold text-ocean"><CountUp to={s.n} /></p><p className="mt-2 text-sm font-extrabold uppercase tracking-widest">{s.l}</p></div></Reveal>)}
      </div>
    </section>

    <section className="pb-24">
      <div className="container">
        <Reveal><SectionHeading eyebrow="The TCL difference" title="A connected team. A consistent standard." copy="We combine the perspective of an international group with the energy, talent and local presence of our Mauritius team." /></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => <Reveal key={p.title} delay={i * 90} className="h-full"><div className={`card h-full p-6 transition-transform hover:-translate-y-2 hover:rotate-1 ${p.bg}`}><div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink bg-white"><p.icon size={23} /></div><p className="mt-6 font-display text-sm font-extrabold">0{i + 1}</p><h3 className="mt-1 text-xl font-extrabold leading-tight">{p.title}</h3><p className="mt-3 text-sm leading-6">{p.copy}</p></div></Reveal>)}
        </div>
      </div>
    </section>

    <section className="border-y-2 border-ink bg-grape py-20 text-white">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Life at TCL</span>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">Good people make great moments.</h2>
          <p className="mt-5 max-w-lg leading-7 text-white/85">From team celebrations to shared achievements, discover the people and moments that make our workplace what it is.</p>
          <Link className="btn btn-primary mt-8" href="/gallery">Explore our gallery <ArrowUpRight size={18} /></Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {tiles.map((p, i) => <Reveal key={p ? p.id : i} delay={i * 100}>
            <div className={`card overflow-hidden transition-transform hover:rotate-0 ${i % 2 ? "mt-9 rotate-3" : "-rotate-3"}`}>
              {p && p.url ? <img src={p.url} alt={p.caption || "TCL team moment"} className="aspect-[4/5] w-full object-cover" /> : <div className="photo-placeholder flex aspect-[4/5] items-end p-4"><span className="rounded-full border-2 border-ink bg-white px-3 py-1.5 text-sm font-extrabold text-ink">{i ? "Celebrations" : "Team moments"}</span></div>}
            </div>
          </Reveal>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border-2 border-ink bg-coral px-8 py-14 shadow-pop md:px-14">
            <span aria-hidden className="absolute -right-4 -top-6 animate-float text-[9rem] opacity-90">🚀</span>
            <p className="font-display text-sm font-extrabold uppercase tracking-widest">Your next chapter</p>
            <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div><h2 className="max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">Bring your energy. Build what’s next.</h2><p className="mt-4 max-w-xl leading-7">Explore opportunities to grow with a team that values people, learning and great service.</p></div>
              <Link href="/careers" className="btn whitespace-nowrap bg-white">Explore careers <ArrowUpRight size={18} /></Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>;
}
