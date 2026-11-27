import { createClient } from "@/lib/supabase/server";

export type GalleryPhoto = { id: string; url?: string; caption: string | null; title: string | null; category: string | null };
type Ev = { title: string | null; category: string | null };
type Row = { id: string; storage_path: string; caption: string | null; gallery_events: Ev | Ev[] | null };

export async function getApprovedPhotos(limit?: number): Promise<GalleryPhoto[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return [];
  try {
    const supabase = await createClient();
    let query = supabase
      .from("gallery_photos")
      .select("id,storage_path,caption,created_at,gallery_events(title,category,event_date)")
      .eq("status", "approved")
      .order("created_at", { ascending: false });
    if (limit) query = query.limit(limit);
    const { data } = await query;
    const rows = (data ?? []) as unknown as Row[];
    if (!rows.length) return [];
    const { data: urls } = await supabase.storage.from("tcl-gallery").createSignedUrls(rows.map((r) => r.storage_path), 3600);
    return rows.map((r, i) => {
      const ev = Array.isArray(r.gallery_events) ? r.gallery_events[0] : r.gallery_events;
      return { id: r.id, url: urls?.[i]?.signedUrl, caption: r.caption, title: ev?.title ?? null, category: ev?.category ?? null };
    });
  } catch {
    return [];
  }
}
