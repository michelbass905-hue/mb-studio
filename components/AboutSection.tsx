export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28"
    >
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-orange-400">
          À propos
        </p>
        <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Le design attire.
          <br />
          L&apos;expérience fait rester.
        </h2>
      </div>
      <div className="flex flex-col justify-center gap-5 text-base leading-7 text-zinc-400">
        <p>
          Chaque projet mérite une identité visuelle qui lui est propre.
          Je pars des besoins, du public et de l&apos;objectif avant de choisir
          les couleurs, la typographie et les interactions.
        </p>
        <p>
          Mon terrain de jeu : Next.js, React, Tailwind CSS et les outils
          créatifs qui permettent de passer rapidement de l&apos;idée au produit.
        </p>
      </div>
    </section>
  );
}