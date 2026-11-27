"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["About", "/about"], ["What We Do", "/what-we-do"], ["Life at TCL", "/life-at-tcl"], ["Gallery", "/gallery"], ["Careers", "/careers"], ["Contact", "/contact"]];

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [path]);
  return <header className="sticky top-0 z-50 border-b-2 border-ink bg-white/95 backdrop-blur">
    <div className="container flex h-[72px] items-center justify-between gap-5">
      <Link href="/" className="flex items-center gap-3">
        <span className="rounded-xl border-2 border-ink bg-coral px-2.5 py-0.5 font-display text-2xl font-extrabold tracking-tighter shadow-[3px_3px_0_#0B1B3A] transition-transform hover:-rotate-3">TCL</span>
        <span className="hidden text-[10px] font-extrabold leading-tight sm:block">TROPICAL<br />CONSULTING LTD</span>
      </Link>
      <nav className="hidden items-center gap-1 lg:flex">
        {links.map(([label, url]) => <Link key={url} href={url} className="navlink" aria-current={path === url ? "page" : undefined}>{label}</Link>)}
      </nav>
      <div className="flex items-center gap-3">
        <Link href="/careers" className="btn btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">Join the crew <span>↗</span></Link>
        <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink bg-sun lg:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </div>
    {open && <nav className="border-t-2 border-ink bg-sun lg:hidden">
      <div className="container grid py-3">
        {links.map(([label, url]) => <Link key={url} href={url} className="border-b-2 border-ink/10 py-4 font-display text-2xl font-extrabold last:border-0">{label}</Link>)}
      </div>
    </nav>}
  </header>;
}
