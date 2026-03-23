"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xjgaqzqr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", company: "", email: "", message: "" });
      } else {
        alert("Fehler beim Senden. Bitte versuchen Sie es erneut.");
      }
    } catch (error) {
      alert("Verbindungsproblem. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* --- HERO IMAGE SECTION --- */}
      <div className="relative w-full h-[840px]">
        <Image
          src="/images/kontaktPhoto2.png"
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* --- CONTACT SECTION (Added) --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT COLUMN: Contact Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-8 tracking-tight">
              Kontaktieren Sie uns
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-12 max-w-md">
              Für Anfragen füllen Sie bitte das Formular aus. Wir werden
              anschliessend in Kontakt mit Ihnen treten.
            </p>

            <div className="flex flex-col gap-8 text-sm md:text-base font-light text-black">
              <a
                href="tel:+41565552940"
                className="hover:opacity-70 transition-opacity w-fit"
              >
                056 555 29 40
              </a>
              <a
                href="mailto:info@ms-architektur.ch"
                className="hover:opacity-70 transition-opacity w-fit"
              >
                info@ms-architektur.ch
              </a>

              <a
                href="https://www.google.com/maps/place/Roosstrasse+47,+8832+Wollerau,+Schweiz/@47.190306,8.72233,3405m/data=!3m1!1e3!4m6!3m5!1s0x479ab22eb5b040ab:0x9063f1aff08c0cba!8m2!3d47.1903064!4d8.7223295!16s%2Fg%2F11cs5psvhc?hl=de&entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:opacity-70 transition-opacity w-fit"
              >
                <p>MS Architektur AG</p>
                <p>Roossstrasse 47</p>
                <p>8832 Wollerau</p>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=MS+Architektur+AG+Neuenhoferstrasse+99+5400+Baden"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:opacity-70 transition-opacity w-fit"
              >
                <p>Büro:</p>
                <p>MS Architektur AG</p>
                <p>Neuenhoferstrasse 99</p>
                <p>5400 Baden</p>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-gray-50 p-12 rounded-2xl text-center flex flex-col items-center justify-center h-full"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <motion.svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-10 h-10 text-green-500"
                    >
                      <motion.path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </motion.svg>
                  </div>
                  <h3 className="text-2xl font-light text-black mb-4">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-gray-600 max-w-sm">
                    Vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage
                    erhalten und werden uns so schnell wie möglich bei Ihnen
                    melden.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-black border-b border-black text-sm uppercase tracking-widest hover:opacity-50 transition-opacity"
                  >
                    Neue Nachricht
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm text-gray-800">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vorname Nachname"
                      required
                      className="w-full border-b border-gray-300 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent"
                    />
                  </div>

                  {/* Company Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm text-gray-800">
                      Firmenname
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Architektur AG"
                      className="w-full border-b border-gray-300 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-gray-800">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@architektur.ch"
                      required
                      className="w-full border-b border-gray-300 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm text-gray-800">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ihre Nachricht"
                      required
                      className="w-full border-b border-gray-300 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-8 w-full py-4 text-sm font-medium tracking-wide transition-all ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-black text-white hover:bg-gray-900"
                    }`}
                  >
                    {isSubmitting ? "Senden..." : "Absenden"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
