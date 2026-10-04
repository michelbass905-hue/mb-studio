import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#11110f] text-[#f1efe7] overflow-x-hidden">
      {/* Texture de grain subtile */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 bg-grain opacity-75"
      />

      {/* Halos de lumière d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 h-[550px] w-[900px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-72 h-[450px] w-[500px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06),transparent_70%)] blur-[90px]"
      />

      <Header />

      <Hero />

      <section
        id="work"
        className="border-t border-white/10 bg-[#171715] px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-orange-400">
                Sélection
              </p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Projets & idées<span className="text-orange-500">.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-zinc-400">
              Trois concepts pour illustrer mon univers créatif. Les projets
              présentés ici sont des exemples de démonstration.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* ── Projet 01 : Dashboard miniature ── */}
            <ProjectCard
              category="WEB DESIGN · DEVELOPMENT"
              title="Digital experiences"
              description="Des interfaces modernes qui transforment les idées en expériences web utiles et mémorables."
              tags={["Next.js", "Tailwind"]}
              meta="2026 · Démo"
              visual={
                <>
              {/* Maquette tableau de bord */}
              <div aria-hidden="true" className="relative h-52 bg-[#0d0d0b] border-b border-white/5 overflow-hidden">
                {/* Halo d'ambiance */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.18),transparent_70%)] blur-2xl" />

                {/* Chrome de navigateur */}
                <div className="relative flex items-center gap-1.5 border-b border-white/5 bg-white/[0.03] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-orange-500/70" />
                  <span className="ml-2 flex h-4 w-28 items-center gap-1.5 rounded-full border border-white/5 bg-black/40 px-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    <span className="h-1.5 w-14 rounded-full bg-white/15" />
                  </span>
                </div>

                {/* Page — expérience web moderne */}
                <div className="relative p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                      <span className="h-1.5 w-9 rounded-full bg-white/25" />
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-6 rounded-full bg-white/10" />
                      <span className="h-4 w-12 rounded-full bg-orange-500" />
                    </span>
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <span className="flex-1 space-y-2">
                      <span className="block h-2.5 w-full max-w-[120px] rounded-full bg-white/25" />
                      <span className="block h-2.5 w-full max-w-[88px] rounded-full bg-white/15" />
                      <span className="block h-1.5 w-full max-w-[104px] rounded-full bg-white/[0.07]" />
                    </span>
                    <span className="flex shrink-0 items-center gap-2 rounded-lg border border-orange-500/25 bg-orange-500/10 px-2.5 py-2">
                      <span className="h-6 w-6 rounded-full border border-orange-500/40" />
                      <span className="space-y-1">
                        <span className="block h-1.5 w-10 rounded-full bg-orange-400/60" />
                        <span className="block h-1.5 w-6 rounded-full bg-white/15" />
                      </span>
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="rounded-lg border border-white/5 bg-white/[0.03] p-2">
                        <span className={`mb-2 block h-1.5 w-6 rounded-full ${i === 0 ? "bg-orange-500/60" : "bg-white/15"}`} />
                        <span className="block h-1 w-full rounded-full bg-white/10" />
                        <span className="mt-1 block h-1 w-2/3 rounded-full bg-white/5" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
                </>
              }
            />

            {/* ── Projet 02 : Interface SaaS miniature ── */}
            <ProjectCard
              category="SAAS · PRODUCT"
              title="Tools for tomorrow"
              description="Des produits numériques conçus pour simplifier le travail et rendre les choses complexes plus accessibles."
              tags={["React", "TypeScript"]}
              meta="2026 · Démo"
              visual={
                <>
              {/* Maquette SaaS */}
              <div aria-hidden="true" className="relative h-52 bg-[#0d0d0b] border-b border-white/5 overflow-hidden">
                {/* Halo d'ambiance */}
                <div className="absolute -left-14 -top-14 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.14),transparent_70%)] blur-2xl" />

                {/* Rail de navigation de l'app */}
                <div className="absolute left-0 top-0 bottom-0 flex w-10 flex-col items-center gap-2 border-r border-white/5 bg-[#131311] pt-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-orange-500 text-[8px] font-bold text-black">M</span>
                  <span className="h-4 w-4 rounded bg-orange-500/25" />
                  <span className="h-4 w-4 rounded bg-white/10" />
                  <span className="h-4 w-4 rounded bg-white/10" />
                  <span className="mt-auto mb-3 h-4 w-4 rounded-full bg-white/10" />
                </div>

                {/* Espace de travail */}
                <div className="relative ml-10 p-3">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-16 rounded-full bg-white/20" />
                    <span className="ml-auto h-4 w-4 rounded bg-white/10" />
                    <span className="h-4 w-4 rounded-full bg-orange-500/40" />
                  </div>

                  {/* Onglets segmentés */}
                  <div className="mt-2 flex gap-1 rounded-lg border border-white/5 bg-white/[0.03] p-0.5">
                    <span className="h-3 w-10 rounded-md bg-orange-500/80" />
                    <span className="h-3 w-10 rounded-md bg-white/5" />
                    <span className="h-3 w-10 rounded-md bg-white/5" />
                  </div>

                  {/* Graphe */}
                  <div className="mt-2 rounded-lg border border-white/5 bg-white/[0.03] p-2">
                    <div className="flex items-center justify-between">
                      <span className="h-1.5 w-12 rounded-full bg-white/15" />
                      <span className="h-1.5 w-6 rounded-full bg-orange-500/50" />
                    </div>
                    <svg viewBox="0 0 200 40" preserveAspectRatio="none" className="mt-1.5 h-9 w-full">
                      <defs>
                        <linearGradient id="mb-saas-area" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 32 L20 28 L40 30 L60 20 L80 24 L100 14 L120 18 L140 8 L160 12 L180 4 L200 8 L200 40 L0 40 Z" fill="url(#mb-saas-area)" />
                      <path d="M0 32 L20 28 L40 30 L60 20 L80 24 L100 14 L120 18 L140 8 L160 12 L180 4 L200 8" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Lignes de liste */}
                  <div className="mt-2 space-y-1.5">
                    {[0, 1].map((i) => (
                      <div key={i} className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-2 py-1.5">
                        <span className="h-3 w-3 rounded-full bg-white/10" />
                        <span className="h-1.5 flex-1 rounded-full bg-white/10" />
                        <span className={`h-3 w-9 rounded-full border ${i === 0 ? "border-orange-500/30 bg-orange-500/20" : "border-white/10 bg-white/5"}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
                </>
              }
            />

            {/* ── Projet 03 : Composition créative ── */}
            <ProjectCard
              category="CREATIVE DEVELOPMENT"
              title="Beyond the ordinary"
              description="Des expérimentations visuelles à la rencontre du design, du code et de la créativité."
              tags={["CSS", "Motion"]}
              meta="2026 · Démo"
              visual={
                <>
              {/* Composition graphique */}
              <div aria-hidden="true" className="relative h-52 bg-[#0c0c0a] border-b border-white/5 overflow-hidden">
                {/* Halos de fond */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_35%,rgba(249,115,22,0.18),transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(139,92,246,0.14),transparent_60%)]" />

                {/* Courbes génératives */}
                <svg viewBox="0 0 300 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="mb-creative-stroke" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
                      <stop offset="55%" stopColor="#fb923c" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.45" />
                    </linearGradient>
                  </defs>
                  <path d="M-10 152 C 60 152, 72 62, 150 62 S 244 152, 310 118" fill="none" stroke="url(#mb-creative-stroke)" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M-10 128 C 52 128, 96 42, 186 44 S 262 122, 310 96" fill="none" stroke="rgba(249,115,22,0.16)" strokeWidth="1" strokeLinecap="round" />
                  <path d="M-10 176 C 70 176, 92 98, 178 98 S 252 172, 310 142" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeLinecap="round" />
                  <circle cx="150" cy="62" r="3.5" fill="#f97316" />
                  <circle cx="150" cy="62" r="9" fill="none" stroke="rgba(249,115,22,0.35)" strokeWidth="1" />
                </svg>

                {/* Formes géométriques */}
                <div className="absolute right-8 top-7 h-20 w-20 rounded-full border border-dashed border-orange-500/25" />
                <div className="absolute bottom-6 left-6 h-12 w-12 rotate-12 rounded-xl border border-violet-500/25" />
                <div className="absolute bottom-9 right-14 h-3 w-3 rounded-full bg-orange-500/50" />

                {/* Typographie expressive */}
                <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
                  <p className="font-serif text-3xl italic leading-none text-white/10 select-none">×</p>
                  <p className="mt-1 font-serif text-3xl font-normal italic leading-tight tracking-tight">
                    <span className="text-orange-400">Forme</span>
                    <span className="text-white/40"> &amp; </span>
                    <span className="text-white/70">code</span>
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Creative dev — Illustration</p>
                </div>
              </div>
                </>
              }
            />

          </div>
        </div>
      </section>

      <AboutSection />

      <Footer />
    </main>
  );
}
