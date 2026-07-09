    function ProjectCard({ project }) {
  return (
    <div className="group bg-[#0B1120] rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500 transition duration-300 hover:-translate-y-2">

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">

          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="flex gap-4 mt-6">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-full"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border border-violet-500 px-5 py-3 rounded-full"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;