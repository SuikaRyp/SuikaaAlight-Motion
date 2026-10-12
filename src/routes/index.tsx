import { Link, createFileRoute } from "@tanstack/react-router";

import { AfterSuccess } from "@/components/site/AfterSuccess";
import { ApiStatusDot } from "@/components/site/ApiStatusDot";
import { Disclaimer } from "@/components/site/Disclaimer";
import { WelcomeModal } from "@/components/site/WelcomeModal";
import { Button } from "@/components/ui/button";
import { siteConfig, absoluteUrl } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alight Motion Premium Creator — Panduan Gratis oleh SuikaRyp" },
      { name: "description", content: siteConfig.description },
      { name: "keywords", content: siteConfig.keywords },
      { name: "author", content: siteConfig.author },
      { property: "og:title", content: "Alight Motion Premium Creator" },
      { property: "og:description", content: siteConfig.description },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Home,
});

const badges = ["FREE", "UNOFFICIAL", "API ONLINE"];

const checklist = [
  { icon: "fa-solid fa-envelope", text: "Email aktif yang bisa menerima email." },
  { icon: "fa-solid fa-inbox", text: "Akses ke inbox email tersebut." },
  { icon: "fa-brands fa-chrome", text: "Browser seperti Chrome." },
  { icon: "fa-solid fa-wifi", text: "Internet yang stabil." },
];

const quickAnswers = [
  {
    q: "Website ini apa?",
    a: "Website bantu untuk mengaktifkan Alight Motion Premium lewat link verifikasi yang dikirim ke email kamu.",
  },
  { q: "Apakah gratis?", a: "Ya. Gratis dan tidak untuk diperjualbelikan." },
  {
    q: "Perlu paham coding?",
    a: "Tidak. Kamu tidak perlu memahami coding atau API untuk menggunakan website ini.",
  },
  {
    q: "Berapa lama prosesnya?",
    a: "Biasanya beberapa menit: masukkan email, buka inbox, salin link, lalu verifikasi.",
  },
];

function Home() {
  return (
    <>
      <WelcomeModal />

      <section className="container-page pt-12 pb-6 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border-2 border-border bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground shadow-brutal-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold sm:text-6xl">
              Alight Motion Premium Creator
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Gunakan layanan gratis dengan panduan langkah demi langkah yang mudah dipahami.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/aktivasi">
                  <i className="fa-solid fa-bolt" aria-hidden="true" />
                  Mulai Aktivasi
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/panduan">
                  <i className="fa-solid fa-book-open" aria-hidden="true" />
                  Baca Panduan
                </Link>
              </Button>
            </div>
            <div className="mt-6">
              <ApiStatusDot />
            </div>
          </div>

          <div className="slab tilt-3d mr-5 mb-5 rounded-xl border-2 border-border bg-card sm:mr-6 sm:mb-6">
            <img
              src={siteConfig.thumbnail}
              alt="Tampilan ilustrasi aplikasi Alight Motion dengan status premium aktif"
              width={1280}
              height={800}
              className="h-full w-full rounded-[10px] object-cover"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="before-title" className="container-page section-pad">
        <h2 id="before-title" className="text-2xl font-extrabold sm:text-3xl">
          Sebelum Mulai
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Siapkan beberapa hal sederhana ini dulu. Kamu tidak perlu memahami coding atau API untuk
          menggunakan website ini.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {checklist.map((item) => (
            <li
              key={item.text}
              className="flex items-start gap-3 rounded-xl border-2 border-border bg-card p-4 shadow-brutal-sm"
            >
              <i className={`${item.icon} mt-0.5 text-primary`} aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="quick-title" className="container-page section-pad">
        <h2 id="quick-title" className="text-2xl font-extrabold sm:text-3xl">
          Penjelasan Singkat
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {quickAnswers.map((item) => (
            <div key={item.q} className="rounded-xl border-2 border-border bg-card p-5 shadow-brutal-sm">
              <p className="font-medium">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to="/troubleshooting">Email tidak masuk?</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/status">Cek API Status</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/sistem">Tentang Sistem</Link>
          </Button>
        </div>
      </section>

      <AfterSuccess />
      <Disclaimer />
    </>
  );
}
