import { experience } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#020617] text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-violet-400 font-semibold">
            Experience & Education
          </p>

          <h2 className="text-5xl font-bold mt-3">
            My Journey
          </h2>

        </div>

        {/* Timeline */}

        <div className="relative border-l-2 border-violet-500 ml-5">

          {experience.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className="mb-16 ml-10 relative"
              >

                {/* Circle */}

                <div className="absolute -left-58px top-2 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">

                  <Icon />

                </div>

                {/* Card */}

                <div className="bg-[#0B1120] rounded-3xl border border-white/10 p-8 hover:border-violet-500 hover:-translate-y-2 transition duration-300">

                  <span className="text-violet-400 font-semibold">

                    {item.year}

                  </span>

                  <h3 className="text-2xl font-bold mt-3">

                    {item.title}

                  </h3>

                  <h4 className="text-gray-400 mt-2">

                    {item.company}

                  </h4>

                  <p className="text-gray-400 leading-8 mt-5">

                    {item.description}

                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Experience;