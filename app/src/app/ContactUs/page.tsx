"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-theme-gradient text-[var(--text-primary)] overflow-hidden">
      {/* HEADER */}
      <section className="py-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-accent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in Touch with <span className="text-accent-light">Restopia</span>
        </motion.h1>
        <motion.p
          className="text-secondary max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Reach out to us for bookings or any inquiries — our team is always happy
          to help and respond quickly.
        </motion.p>
      </section>

      {/* CONTACT DETAILS + MAP */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <motion.div
          className="flex flex-col gap-8 bg-[var(--background)] shadow-lg rounded-2xl p-8 border border-theme"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-accent mb-4">Reach Us</h2>
          <div className="space-y-4 text-secondary">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <p>24, Namghar Path, Panjabari Rd, Bagharbari, Guwahati, Assam 781037</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent" />
              <p>070992 30800</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent" />
              <p>info@restopiahotels.com</p>
            </div>
          </div>

          {/* WHATSAPP CTA BUTTON */}
          <a
            href="https://wa.me/917099230800?text=Hello!%20I%20found%20your%20website%20Restopia%20Homestay%20and%20would%20like%20to%20know%20more%20about%20booking%20and%20availability."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-accent hover:opacity-90 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 text-black" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* RIGHT SIDE — GOOGLE MAP */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="Restopia Homestay Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.851026592965!2d91.82875320000001!3d26.136399899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5900265d9aa3%3A0x633854baba70180e!2sRestopia%20Homestay!5e0!3m2!1sen!2sin!4v1760703504807!5m2!1sen!2sin"
            className="w-full h-80 rounded-2xl shadow-md border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-accent-gradient text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Your Comfortable Stay Awaits
        </h2>
        <a
          href="/AboutUs"
          className="bg-black text-accent font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[var(--gold-dark)] hover:text-black transition-transform transform hover:scale-105"
        >
          More About Us
        </a>
      </section>
    </main>
  );
}
