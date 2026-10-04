export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.25fr_0.75fr] md:px-12 md:pb-32 md:pt-24">
      {/* Colonne gauche : Titrage & CTA */}
      <div>
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
          <span>Développeur créatif indépendant</span>
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Je transforme
          <br />
          les idées en
          <br />
          <span className="font-serif font-normal italic text-orange-500 drop-shadow-[0_0_35px_rgba(249,115,22,0.25)]">
            expériences.
          </span>
        </h1>

        <p className="mt-8 max-w-lg text-base leading-7 text-zinc-400 md:text-lg">
          Je conçois et développe des expériences numériques à la croisée
          du design, de la technologie et de l&apos;imagination.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 motion-reduce:hover:transform-none"
          >
            <span>Explorer mes projets</span>
            <span className="transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transform-none">↘</span>
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:hover:transform-none"
          >
            Découvrir mon univers
          </a>
        </div>
      </div>

        {/* Colonne droite : Composant visuel interactif Studio Inspector */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#161614] p-6 shadow-2xl shadow-black/60 transition duration-300 hover:border-white/20">
          {/* Liseré lumineux supérieur */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
          />

          {/* En-tête de la fenêtre */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
              <span className="ml-2 font-mono text-[11px] text-zinc-400">
                mb-studio.config.ts
              </span>
            </div>
            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-0.5 font-mono text-[10px] text-orange-400">
              DÉMO
            </span>
          </div>

          {/* Corps de l&apos;inspecteur : simulation d&apos;un composant de design & code */}
          <div className="my-5 space-y-4">
            <div className="rounded-xl border border-white/5 bg-[#10100e] p-4">
              <div className="flex items-center justify-between text-[11px] text-zinc-400">
                <span className="font-mono text-zinc-500">{"// Aperçu de composant"}</span>
                <span className="font-mono text-orange-400">UI / Craft</span>
              </div>

              {/* Exemple de composant visuel avec micro-états */}
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-3.5 py-1.5 text-xs text-orange-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse motion-reduce:animate-none" />
                  <span className="font-medium">Design avec intention</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-300">
                  <span className="text-zinc-500">status:</span>
                  <span className="text-emerald-400">ready</span>
                </div>
              </div>
            </div>

            {/* Extrait de code stylisé */}
            <div className="rounded-xl border border-white/5 bg-[#0e0e0c] p-4 font-mono text-xs leading-relaxed text-zinc-300">
              <div className="text-zinc-500">{"// Principes de conception (Démonstration)"}</div>
              <div className="mt-2 text-zinc-400">
                <span className="text-orange-400">const</span> craft = {'{'}
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">aesthetic:</span>{" "}
                <span className="text-amber-300">&quot;Editorial Dark&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">typography:</span>{" "}
                <span className="text-amber-300">&quot;Grotesque &amp; Serif&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">accessibilite:</span>{" "}
                <span className="text-emerald-400">&quot;WCAG AA&quot;</span>
              </div>
              <div className="text-zinc-400">{'};'}</div>
            </div>
          </div>

          {/* Pied de carte */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Contraste conforme (AA/AAA)
            </span>
            <span className="font-mono text-zinc-500">Next.js 16 + Tailwind</span>
          </div>
        </div>
    </section>
  );
}