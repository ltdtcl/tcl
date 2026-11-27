import { Image as ImageIcon } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { getApprovedPhotos } from "@/lib/gallery";

export const revalidate = 0;

export default async function Gallery() {
  const photos = await getApprovedPhotos();
  return <main>
    <PageHero eyebrow="Life at TCL · Gallery" title="Moments worth" accent="sharing." bg="bg-grape/20" emoji="📸" copy="A look at the celebrations, team moments and experiences that bring our people together." />
    <section className="section"><div className="container">
      {photos.length ? <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {photos.map((p, i) => <article key={p.id} className="group mb-6 break-inside-avoid overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-pop transition-transform hover:z-10 hover:-rotate-1 hover:scale-[1.02]">
          <div className="relative overflow-hidden">
            <img src={p.url} alt={p.caption || "TCL team event"} loading={i < 3 ? "eager" : "lazy"} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute left-3 top-3 rounded-full border-2 border-ink bg-sun px-3 py-1 text-xs font-extrabold uppercase tracking-wider">{p.category || "TCL moments"}</span>
          </div>
          <h2 className="p-4 font-display text-xl font-extrabold">{p.title || p.caption || "Life at TCL"}</h2>
        </article>)}
      </div> : <div className="rounded-3xl border-2 border-dashed border-ink bg-mist px-6 py-20 text-center"><ImageIcon className="mx-auto text-ocean" size={42} /><h2 className="mt-5 text-3xl font-extrabold">The memories are coming.</h2><p className="mx-auto mt-3 max-w-md text-slate-700">Approved team photos and event highlights will appear here. Check back soon.</p></div>}
    </div></section>
  </main>;
}
