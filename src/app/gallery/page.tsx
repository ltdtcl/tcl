import { Image as ImageIcon } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { getApprovedPhotos } from "@/lib/gallery";

export const revalidate = 0;

export default async function Gallery() {
  const photos = await getApprovedPhotos();
  return <main>
    <PageHero eyebrow="Life at TCL · Gallery" title="Moments worth" accent="sharing." copy="A look at the celebrations, team moments and experiences that bring our people together." />
    <section className="container py-8">
      {photos.length ? <GalleryGrid photos={photos} /> : <div className="card px-6 py-20 text-center"><ImageIcon className="mx-auto text-brand" size={40} /><h2 className="mt-5 text-2xl font-bold">The memories are coming.</h2><p className="mx-auto mt-3 max-w-md text-slate-600">Approved team photos and event highlights will appear here. Check back soon.</p></div>}
    </section>
  </main>;
}
