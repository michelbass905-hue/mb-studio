export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 px-6 py-10 md:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-2xl font-semibold tracking-tight">
            Construisons quelque chose de différent
            <span className="text-orange-500">.</span>
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Un projet en tête ? Échangeons sur vos idées.
          </p>
        </div>
        <a
          href="mailto:michelbass46@gmail.com"
          className="rounded-sm text-sm text-orange-400 transition duration-200 hover:text-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#11110f]"
        >
          michelbass46@gmail.com ↗
        </a>
      </div>
      <p className="mx-auto mt-12 max-w-7xl text-xs text-zinc-400">
        © 2026 MB Studio · Conçu avec Next.js et Tailwind CSS
      </p>
    </footer>
  );
}