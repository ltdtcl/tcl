"use client";
import { useMemo, useState } from "react";
import type { GalleryPhoto } from "@/lib/gallery";

const FALLBACK = "TCL moments";

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const cats = useMemo(() => ["All", ...Array.from(new Set(photos.map((p) => p.category || FALLBACK)))], [photos]);
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(9);
  const shown = active === "All" ? photos : photos.filter((p) => (p.category || FALLBACK) === active);
  return <div>
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="mr-1 text-slate-500">Categories</span>
      {cats.map((c) => <button key={c} type="button" onClick={() => { setActive(c); setVisible(9); }} className={`rounded-full px-4 py-2 font-semibold transition ${active === c ? "bg-brand text-white" : "border border-line bg-white text-slate-700 hover:bg-sky"}`}>{c}</button>)}
    </div>
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {shown.slice(0, visible).map((p) => <article key={p.id} className="card group overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden bg-sky">
          {p.url ? <img src={p.url} alt={p.caption || "TCL team event"} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /> : null}
        </div>
        <div className="p-5">
          <span className="rounded-full bg-sky px-3 py-1 text-xs font-semibold text-brand">{p.category || FALLBACK}</span>
          <h2 className="mt-3 text-lg font-bold leading-snug">{p.title || p.caption || "Life at TCL"}</h2>
        </div>
      </article>)}
    </div>
    {visible < shown.length && <div className="mt-10 text-center"><button type="button" onClick={() => setVisible(visible + 9)} className="btn btn-outline">Load more</button></div>}
  </div>;
}
