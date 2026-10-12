import { Link } from "@tanstack/react-router";

const links = [
  { to: "/panduan", label: "Panduan" },
  { to: "/faq", label: "FAQ" },
  { to: "/troubleshooting", label: "Troubleshooting" },
  { to: "/status", label: "API Status" },
  { to: "/sistem", label: "Tentang Sistem" },
  { to: "/donasi", label: "Donasi" },
  { to: "/kontribusi", label: "Kontribusi" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t-4 border-border bg-primary text-primary-foreground">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logo.png"
              alt="Logo Alight Motion Premium Creator"
              width={32}
              height={32}
              loading="lazy"
              className="h-9 w-9 rounded-md border-2 border-border bg-card"
            />
            <span className="font-display font-extrabold">Alight Motion Premium Creator</span>
          </div>
          <p className="mt-3 text-sm font-medium">Created by SuikaRyp</p>
          <p className="mt-1 text-sm font-medium">Free • Unofficial • Not for Resale</p>
        </div>

        <nav aria-label="Tautan footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="font-semibold underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container-page border-t-2 border-border py-6 text-xs leading-relaxed">
        Layanan unofficial oleh SuikaRyp. Tidak berafiliasi dengan Alight Creative / Alight Motion.
      </div>
    </footer>
  );
}
