import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{return ["","/about","/what-we-do","/life-at-tcl","/gallery","/careers","/contact"].map(path=>({url:`https://www.tropicalconsultingltd.com${path}`,lastModified:new Date()}));}
