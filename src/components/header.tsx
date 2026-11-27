import Link from "next/link";
const links = [["About","/about"],["What We Do","/what-we-do"],["Life at TCL","/life-at-tcl"],["Gallery","/gallery"],["Careers","/careers"],["Contact","/contact"]];
export function Header() {
  return <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
    <div className="container flex h-[76px] items-center justify-between gap-5">
      <Link href="/" className="flex items-center gap-2"><span className="text-3xl font-black tracking-tighter text-[#1458D4]">TCL</span><span className="hidden border-l border-slate-300 pl-2 text-[10px] font-bold leading-tight text-slate-600 sm:block">TROPICAL<br/>CONSULTING LTD</span></Link>
      <nav className="hidden items-center gap-6 lg:flex">{links.map(([label,url])=><Link className="navlink" key={url} href={url}>{label}</Link>)}</nav>
      <Link href="/careers" className="btn btn-primary !px-5 !py-3 text-sm">Join Us <span>↗</span></Link>
    </div>
  </header>;
}
