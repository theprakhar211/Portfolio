import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Let's Work Together
          </h3>

          <p className="text-gray-400 mb-6">
            I'm always open to discussing new projects, creative ideas,
            or opportunities to collaborate.
          </p>

          <div className="space-y-4 text-lg">

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
            >
              <FaEnvelope /> Email
            </a>

            <a
              href="https://linkedin.com"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
            >
              <FaGithub /> GitHub
            </a>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />

            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
