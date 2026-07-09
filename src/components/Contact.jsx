import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(
      "service_qfq0e3s",
      "template_38ihyjc",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "pBGiZb5B3FelyBZt0"
    )
    .then(() => {
      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    })
    .catch(() => {
      alert("Failed to send message.");
      setLoading(false);
    });
  };
  return (
    <section
      id="contact"
      className="bg-[#020617] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-violet-400 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have an exciting project or an idea? I'd love to hear from you.
            Let's create something amazing together.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}

          <div className="bg-[#0B1120] rounded-3xl border border-white/10 p-8">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5 items-center">

                <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <a
  href="mailto:bilalnasir2910@gmail.com"
  className="hover:text-violet-400 transition"
>
  bilalnasir2910@gmail.com
</a>
                </div>

              </div>

              <div className="flex gap-5 items-center">

                <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <a
  href="tel:+923426573962"
  className="hover:text-violet-400 transition"
>
  +92 342 6573962
</a>
                </div>

              </div>

              <div className="flex gap-5 items-center">

                <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400">Location</p>
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

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-10">

              <a
                href="https://github.com/bilaldomore"
target="_blank"
rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#151E32] flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/bilal-nasir-nonari/"
target="_blank"
rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#151E32] flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://wa.me/923426573962"
target="_blank"
rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#151E32] flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form
  onSubmit={sendEmail}
  className="bg-[#0B1120] rounded-3xl border border-white/10 p-8 space-y-6"
>

            <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="w-full bg-[#151E32] rounded-xl px-5 py-4 outline-none border border-transparent focus:border-violet-500"
/>

          <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email"
  className="w-full bg-[#151E32] rounded-xl px-5 py-4 outline-none border border-transparent focus:border-violet-500"
/>

            <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Subject"
  className="w-full bg-[#151E32] rounded-xl px-5 py-4 outline-none border border-transparent focus:border-violet-500"
/>

           <textarea
  rows="6"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Write your message..."
  className="w-full bg-[#151E32] rounded-xl px-5 py-4 outline-none border border-transparent focus:border-violet-500"
/>

            <button
  type="submit"
  disabled={loading}
  className="bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition"
>
  <FaPaperPlane />

  {loading ? "Sending..." : "Send Message"}
</button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;