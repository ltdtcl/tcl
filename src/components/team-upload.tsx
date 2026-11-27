 "use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
type Event={id:string;title:string;category:string};
export function TeamUpload({events}:{events:Event[]}) {
 const [eventId,setEventId]=useState(""); const [files,setFiles]=useState<FileList|null>(null);
 const [busy,setBusy]=useState(false); const [message,setMessage]=useState("");
 async function submit(e:React.FormEvent){e.preventDefault();if(!files?.length){setMessage("Please choose at least one photo.");return;}
 setBusy(true);setMessage("");const supabase=createClient();const {data:{user}}=await supabase.auth.getUser();if(!user){setMessage("Please sign in again.");setBusy(false);return;}
 let uploaded=0;for(const file of Array.from(files)){if(!["image/jpeg","image/png","image/webp"].includes(file.type)||file.size>8*1024*1024){setMessage(`${file.name} was skipped: JPG, PNG or WebP up to 8 MB only.`);continue;}
 const path=`${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g,"-")}`;
 const {error:upErr}=await supabase.storage.from("tcl-gallery").upload(path,file,{contentType:file.type});
 if(upErr){setMessage(upErr.message);continue;}
 const {error:rowErr}=await supabase.from("gallery_photos").insert({event_id:eventId||null,storage_path:path,caption:file.name,uploaded_by:user.id,status:"pending"});
 if(rowErr){await supabase.storage.from("tcl-gallery").remove([path]);setMessage(rowErr.message);}else uploaded++;
 }
 setFiles(null);setBusy(false);setMessage(`${uploaded} photo(s) submitted. They will appear in the gallery after administrator approval.`);
 }
 return <main className="min-h-[75vh] bg-[#F4F8FE] py-16"><div className="container max-w-2xl"><div className="card p-7 md:p-10"><p className="eyebrow">TCL team portal</p><h1 className="mt-3 text-4xl font-black">Share the moment.</h1><p className="mt-4 leading-7 text-slate-600">Upload photos from company celebrations, events and team-building activities. An administrator will review your photos before they are published.</p><form onSubmit={submit} className="mt-8 grid gap-5"><label className="grid gap-2 text-sm font-bold">Event<select value={eventId} onChange={e=>setEventId(e.target.value)} className="rounded-xl border border-slate-200 bg-white p-3 font-normal"><option value="">General TCL moment</option>{events.map(ev=><option key={ev.id} value={ev.id}>{ev.title} · {ev.category}</option>)}</select></label><label className="grid gap-2 text-sm font-bold">Choose photos<input type="file" multiple accept="image/jpeg,image/png,image/webp" onChange={e=>setFiles(e.target.files)} className="rounded-xl border border-dashed border-blue-300 bg-blue-50 p-5 font-normal"/></label><p className="text-xs text-slate-500">Accepted formats: JPG, PNG, WebP. Maximum file size: 8 MB per image. Please only upload images you have permission to share.</p>{files&&<p className="text-sm font-semibold text-blue-700">{files.length} photo(s) selected</p>}<button disabled={busy} className="btn btn-primary w-full">{busy?"Uploading…":"Submit photos ↗"}</button></form>{message&&<p role="status" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">{message}</p>}</div></div></main>;
}
