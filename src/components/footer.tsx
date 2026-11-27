import Link from "next/link";

export function Footer() {
  const col = "grid gap-3 text-sm font-semibold text-white/80 [&_a:hover]:text-sun";
  return <footer className="relative overflow-hidden bg-ink pt-16 text-white">
    <div className="container grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <div className="font-display text-6xl font-extrabold tracking-tighter">TCL<span className="text-coral">.</span></div>
        <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">Global group. Local presence. Always connected. Customer support and service excellence from Mauritius, around the clock.</p>
      </div>
      <div><p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-sun">Explore</p><div className={col}><Link href="/about">About</Link><Link href="/what-we-do">What We Do</Link><Link href="/life-at-tcl">Life at TCL</Link><Link href="/gallery">Gallery</Link></div></div>
      <div><p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-sun">Connect</p><div className={col}><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link><Link href="/upload">Upload team photos</Link><Link href="/admin/login">Admin sign in</Link></div></div>
    </div>
    <div className="container mt-12 border-t border-white/15 py-6 text-xs text-white/50">© {new Date().getFullYear()} Tropical Consulting Ltd. All rights reserved.</div>
  </footer>;
}
