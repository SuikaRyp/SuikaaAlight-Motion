import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ApiStatusDot } from "@/components/site/ApiStatusDot";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/aktivasi", label: "Aktivasi" },
  { to: "/panduan", label: "Panduan" },
  { to: "/troubleshooting", label: "Troubleshooting" },
  { to: "/faq", label: "FAQ" },
  { to: "/status", label: "API Status" },
  { to: "/donasi", label: "Donasi" },
  { to: "/kontribusi", label: "Kontribusi" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-4 border-border bg-accent">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.png"
            alt="Logo Alight Motion Premium Creator"
            width={32}
            height={32}
            className="h-9 w-9 rounded-md border-2 border-border bg-card shadow-brutal-sm"
          />
          <span className="font-display text-sm font-extrabold leading-tight sm:text-base">
            Alight Motion <span>Premium Creator</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md border-2 border-transparent px-3 py-2 text-sm font-semibold text-foreground transition-all hover:border-border hover:bg-card data-[status=active]:border-border data-[status=active]:bg-primary data-[status=active]:text-primary-foreground data-[status=active]:shadow-brutal-sm"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ApiStatusDot />
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/aktivasi">Mulai Gratis</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label="Buka menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} aria-hidden="true" />
          </Button>
        </div>
      </nav>

      {open && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/20 lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="animate-fade-in relative z-40 border-b-4 border-border bg-card lg:hidden">
            <ul className="container-page flex flex-col py-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md border-2 border-transparent px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-border hover:bg-accent data-[status=active]:border-border data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="px-3 pt-3">
                <Button asChild className="w-full">
                  <Link to="/aktivasi" onClick={() => setOpen(false)}>
                    Mulai Gratis
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
