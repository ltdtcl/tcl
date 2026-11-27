import Link from "next/link";
export function Footer() { return <footer className="bg-[#10213D] py-12 text-white">
  <div className="container grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
    <div><div className="text-3xl font-black tracking-tighter">TCL</div><p className="mt-3 max-w-sm text-sm leading-6 text-blue-100/70">Global group. Local presence. Always connected. Customer support and service excellence from Mauritius, around the clock.</p></div>
    <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-200">Explore</p><div className="grid gap-3 text-sm text-blue-50/80"><Link href="/about">About</Link><Link href="/what-we-do">What We Do</Link><Link href="/life-at-tcl">Life at TCL</Link><Link href="/gallery">Gallery</Link></div></div>
    <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-200">Connect</p><div className="grid gap-3 text-sm text-blue-50/80"><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link><Link href="/upload">Upload team photos</Link><Link href="/admin/login">Admin sign in</Link></div></div>
  </div><div className="container mt-10 border-t border-white/10 pt-6 text-xs text-blue-100/50">© {new Date().getFullYear()} Tropical Consulting Ltd. All rights reserved.</div>
</footer>; }
