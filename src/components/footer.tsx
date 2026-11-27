import Link from "next/link";

export function Footer() {
  const col = "grid gap-2.5 text-sm text-white/80 [&_a:hover]:text-white";
  return <footer className="mt-16 rounded-t-[32px] bg-ink text-white">
    <div className="container grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <div className="text-3xl font-bold tracking-tighter">tcl<span className="text-[#6C8CFF]">.</span></div>
        <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">Global group. Local presence. Always connected. Customer support and service excellence from Mauritius, around the clock.</p>
      </div>
      <div><p className="mb-4 text-sm font-semibold text-[#6C8CFF]">Explore</p><div className={col}><Link href="/about">About</Link><Link href="/what-we-do">What We Do</Link><Link href="/life-at-tcl">Life at TCL</Link><Link href="/gallery">Gallery</Link></div></div>
      <div><p className="mb-4 text-sm font-semibold text-[#6C8CFF]">Connect</p><div className={col}><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link><Link href="/upload">Upload team photos</Link><Link href="/admin/login">Admin sign in</Link></div></div>
    </div>
    <div className="container border-t border-white/10 py-6 text-xs text-white/40">© {new Date().getFullYear()} Tropical Consulting Ltd. All rights reserved.</div>
  </footer>;
}
