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
  return <header className="sticky top-3 z-50 mt-3">
    <div className="container">
      <div className="flex h-14 items-center justify-between rounded-full border border-line bg-white/90 pl-5 pr-2 backdrop-blur">
        <Link href="/" className="text-xl font-bold tracking-tighter">tcl<span className="text-brand">.</span></Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([label, url]) => <Link key={url} href={url} className="navlink" aria-current={path === url ? "page" : undefined}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-dark hidden !px-5 !py-2.5 sm:inline-flex">Contact us</Link>
          <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-brand lg:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {open && <nav className="mt-2 grid rounded-3xl border border-line bg-white p-3 lg:hidden">
        {links.map(([label, url]) => <Link key={url} href={url} className="rounded-2xl px-4 py-3 text-lg font-semibold hover:bg-mist">{label}</Link>)}
      </nav>}
    </div>
  </header>;
}
