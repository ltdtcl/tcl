import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { TeamUpload } from "@/components/team-upload";
export default async function UploadPage(){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect("/admin/login?next=/upload");const {data:events}=await supabase.from("gallery_events").select("id,title,category").order("created_at",{ascending:false});return <TeamUpload events={events||[]}/>;}
