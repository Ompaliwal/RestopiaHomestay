"use client";

import { motion } from "framer-motion";
import { Heart, Home, Wifi, Car, Shield, Briefcase } from "lucide-react";

export default function About() {
  return (
    <main className="bg-theme-gradient text-[var(--text-primary)] overflow-hidden">
      {/* HEADER */}
      <section className="py-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-accent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-accent-light">Restopia Homestay</span>
        </motion.h1>
        <motion.p
          className="text-secondary text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <strong>Restopia Homestay</strong> — your ideal 3-star comfort
          stay in the heart of Guwahati. Whether for work or leisure, Restopia
          offers peace, convenience, and warm hospitality.
        </motion.p>
      </section>

      {/* OUR STORY */}
      <section className="py-16 px-6 bg-[var(--background)] border-t border-theme">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="flex flex-col justify-center text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-accent mb-4">Our Story</h2>
            <p className="text-secondary leading-relaxed">
              Restopia began as a small family initiative providing clean and
              affordable accommodation. Today, it’s a trusted name for travelers
              seeking a homely experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { title: "Family-Run", desc: "Hospitality with heart", Icon: Heart },
              { title: "Comfortable Rooms", desc: "Modern and cozy", Icon: Home },
              { title: "Free Wi-Fi", desc: "Stay connected", Icon: Wifi },
              { title: "Free Parking", desc: "Safe and convenient", Icon: Car },
            ].map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="p-6 bg-[var(--gradient-end)] rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-theme text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-[var(--gold-dark)] rounded-full">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-secondary text-sm">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-accent">Values</span>
        </motion.h2>
        <motion.p
          className="text-secondary max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Genuine hospitality, reliability, and safety — these define Restopia.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Comfort", text: "Spacious rooms with modern comforts.", Icon: Briefcase },
            { title: "Guest Safety", text: "24x7 CCTV & fire safety.", Icon: Shield },
            { title: "Helpful Staff", text: "Always ready to assist.", Icon: Heart },
          ].map(({ title, text, Icon }, i) => (
            <motion.div
              key={title}
              className="p-8 bg-[var(--background)] rounded-2xl shadow-md hover:shadow-xl border border-theme"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[var(--gold-dark)] rounded-full">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">
                {title}
              </h3>
              <p className="text-secondary text-sm">{text}</p>
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
            Experience Comfort at Restopia
          </h2>
          <a
            href="/ContactUs"
            className="bg-black text-accent font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[var(--gold-dark)] hover:text-black transition-transform transform hover:scale-105"
          >
            Plan Your Stay
          </a>
        </motion.div>
      </section>
    </main>
  );
}
