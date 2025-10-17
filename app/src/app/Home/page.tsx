"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bed, Wifi, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-theme-gradient text-[var(--text-primary)] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 px-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto">
        <motion.div
          className="flex-1 text-center md:text-left z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Stay at{" "}
            <span className="bg-clip-text text-transparent text-accent">
              Restopia Homestay
            </span>
          </h1>
          <p className="text-secondary text-lg md:text-xl mb-8 max-w-xl">
            Comfortable, well-connected, and guest-focused — a 3-star homestay in Guwahati
            offering peace, convenience, and warm hospitality for every traveler.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/ContactUs"
              className="bg-accent hover:opacity-90 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Book Your Stay
            </Link>
            <Link
              href="/AboutUs"
              className="border border-theme text-accent hover:bg-[var(--gold-dark)] hover:text-black font-semibold px-8 py-3 rounded-full transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 mb-12 md:mb-0 relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[280px] sm:w-[360px] md:w-[420px] h-[320px] sm:h-[420px] md:h-[480px]">
            <img
              src="/images/home1.jpg"
              alt="Restopia Homestay room"
              className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-20 text-center bg-[var(--background)]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Stay at <span className="text-accent">Restopia?</span>
        </motion.h2>

        <motion.p
          className="text-secondary max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Every detail at Restopia is crafted for your comfort — from cozy interiors
          and useful amenities to thoughtful safety and service.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-3 px-6 max-w-6xl mx-auto">
          {[
            {
              title: "Elegant & Cozy Rooms",
              desc:
                "Spacious, air-conditioned rooms with comfortable bedding, warm lighting, and peaceful views. Designed for relaxation and productivity, each space blends homely comfort with modern simplicity.",
              Icon: Bed,
            },
            {
              title: "Connectivity & Amenities",
              desc:
                "Enjoy high-speed Wi-Fi, free parking, 24-hour power backup, and essential in-room facilities like a kettle, smart TV, and mineral water — all to make your stay convenient and connected.",
              Icon: Wifi,
            },
            {
              title: "Safety & Care",
              desc:
                "Your comfort and security come first. With 24x7 CCTV surveillance, clean surroundings, and friendly staff always ready to help, you can unwind knowing you’re in safe hands.",
              Icon: Shield,
            },
          ].map(({ title, desc, Icon }, i) => (
            <motion.div
              key={title}
              className="p-8 bg-[var(--background)] rounded-2xl shadow-md hover:shadow-xl transition-all border border-theme flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="p-4 bg-[var(--gold-dark)] rounded-full mb-6">
                <Icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent-gradient text-black text-center relative overflow-hidden">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover Comfort in Guwahati
          </h2>
          <p className="mb-10 max-w-2xl mx-auto text-sm md:text-base">
            Book a reliable stay with modern amenities, personal care, and genuine hospitality.
          </p>
          <Link
            href="/ContactUs"
            className="bg-black text-accent font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[var(--gold-dark)] hover:text-black transition-transform transform hover:scale-105"
          >
            Book Your Stay
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
