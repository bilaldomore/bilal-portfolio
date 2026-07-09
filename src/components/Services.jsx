import { services } from "../data/services";

function Services() {
  return (
    <section
      id="services"
      className="bg-[#020617] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-violet-400 font-semibold">
            What I Offer
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Services I Provide
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.id}
                className="bg-[#0B1120] border border-white/10 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-3 transition-all duration-300"
              >

                <Icon className="text-5xl text-violet-500 mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {service.description}
                </p>

                <button className="text-violet-400 font-semibold hover:text-violet-300 transition">
                  Learn More →
                </button>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Services;