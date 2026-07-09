import { useState } from "react";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 6);

  return (
    <section id="projects" className="bg-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-violet-400 font-semibold">
            Featured Projects
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Some Things I've Built
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visibleProjects.map((project) => (

            <div
              key={project.id}
              className="bg-[#0B1120] rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500 transition-all duration-300 hover:-translate-y-2"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-violet-400 hover:text-violet-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-violet-400 hover:text-violet-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* View More Button */}
        {projects.length > 6 && (
          <div className="flex justify-center mt-12">

            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-full font-semibold transition duration-300"
            >
              {showAll ? "Show Less ↑" : "View More Projects ↓"}
            </button>

          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;