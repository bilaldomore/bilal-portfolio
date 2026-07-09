import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#020617] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-violet-400 font-semibold">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Technologies I Work With
          </h2>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill) => {

            const Icon = skill.icon;

            return (

              <div
                key={skill.id}
                className="bg-[#0B1120] border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-3 hover:border-violet-500 transition duration-300"
              >

                <Icon
                  className={`text-6xl mx-auto mb-6 ${skill.color}`}
                />

                <h3 className="text-2xl font-semibold">
                  {skill.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {skill.level}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;