import profile from "../assets/img/profile.png";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDownload,
  FaProjectDiagram,
  FaSmile,
  FaAward,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-[#020617] text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-violet-400 uppercase tracking-[5px] font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Get To Know Me Better
          </h2>

        </div>

        {/* Main Section */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-600 to-blue-500 blur-3xl opacity-30"></div>

              <img
                src={profile}
                alt="Bilal"
                className="relative w-96 rounded-3xl border border-white/10"
              />

            </div>

          </div>

          {/* Content */}

          <div>

            <h3 className="text-4xl font-bold mb-6">
              I'm Muhammad Bilal Nasir
            </h3>

            <h4 className="text-violet-400 text-xl mb-6">
              Full Stack Web Developer
            </h4>

            <p className="text-gray-400 leading-8 mb-10">
              I am a passionate Full Stack Web Developer with experience in React, Node.js, Express.js, MongoDB, WordPress, Shopify, and SEO. I enjoy building fast, responsive, and user-friendly web applications that help businesses establish a strong online presence and deliver exceptional user experiences.
            </p>

            {/* Info */}

            <div className="grid sm:grid-cols-2 gap-6">

              <div className="flex gap-4 items-center">

                <FaUser className="text-violet-500 text-xl" />

                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <h4>Muhammad Bilal</h4>
                </div>

              </div>

              <div className="flex gap-4 items-center">

                <FaEnvelope className="text-violet-500 text-xl" />

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
  href="mailto:bilalnasir2910@gmail.com"
  className="hover:text-violet-400 transition"
>
  bilalnasir2910@gmail.com
</a>
                </div>

              </div>

              <div className="flex gap-4 items-center">

                <FaMapMarkerAlt className="text-violet-500 text-xl" />

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <a
  href="https://maps.google.com/?q=Lahore,Pakistan"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-violet-400 transition"
>
  Lahore, Pakistan
</a>
                </div>

              </div>

              <div className="flex gap-4 items-center">

                <FaBriefcase className="text-violet-500 text-xl" />

                <div>
                  <p className="text-gray-400 text-sm">Status</p>
                 <h4 className="text-green-400">
  Available for Freelance
</h4>
                </div>

              </div>

            </div>

           <a
  href="/Muhammad_Bilal_MERN_DEV(1).pdf"
  download
  className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 rounded-full hover:scale-105 transition duration-300"
>
  <FaDownload />
  Download CV
</a>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-8 mt-24">

          <div className="bg-[#0B1120] rounded-3xl border border-white/10 p-8 text-center hover:-translate-y-3 transition duration-300">

            <FaProjectDiagram className="mx-auto text-4xl text-violet-500 mb-4" />

            <h3 className="text-4xl font-bold">30+</h3>

            <p className="text-gray-400 mt-2">
              Projects
            </p>

          </div>

          <div className="bg-[#0B1120] rounded-3xl border border-white/10 p-8 text-center hover:-translate-y-3 transition duration-300">

            <FaSmile className="mx-auto text-4xl text-violet-500 mb-4" />

            <h3 className="text-4xl font-bold">20+</h3>

            <p className="text-gray-400 mt-2">
              Happy Clients
            </p>

          </div>

          <div className="bg-[#0B1120] rounded-3xl border border-white/10 p-8 text-center hover:-translate-y-3 transition duration-300">

            <FaBriefcase className="mx-auto text-4xl text-violet-500 mb-4" />

            <h3 className="text-4xl font-bold">2+</h3>

            <p className="text-gray-400 mt-2">
              Years Experience
            </p>

          </div>

          <div className="bg-[#0B1120] rounded-3xl border border-white/10 p-8 text-center hover:-translate-y-3 transition duration-300">

            <FaAward className="mx-auto text-4xl text-violet-500 mb-4" />

            <h3 className="text-4xl font-bold">100%</h3>

            <p className="text-gray-400 mt-2">
              Client Satisfaction
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;