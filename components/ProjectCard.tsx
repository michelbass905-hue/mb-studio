interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  meta: string;
  visual: React.ReactNode;
}

export default function ProjectCard({ category, title, description, tags, meta, visual }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11110f] transition duration-300 ease-out hover:-translate-y-1 hover:border-orange-500/40 hover:bg-[#14130f] hover:shadow-[0_22px_45px_-24px_rgba(249,115,22,0.55)] focus-within:border-orange-500/40 focus-within:shadow-[0_22px_45px_-24px_rgba(249,115,22,0.4)]">
      <div className="project-visual">{visual}</div>
      {/* Méta */}
      <div className="flex flex-col flex-1 justify-between p-5">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] tracking-[0.15em] text-orange-400 uppercase font-medium">
              {category}
            </span>
            <span className="text-orange-500 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-300 motion-reduce:transform-none">
              ↗
            </span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
          <div className="flex gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-mono text-[10px] text-zinc-500">{meta}</span>
        </div>
      </div>
    </article>
  );
}