"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aditya Sharma",
    image: "/images/user1.jpg",
    message:
      "Beautiful and peaceful homestay! The rooms were spotless, the beds cozy, and the atmosphere so relaxing. Perfect place to unwind after exploring Guwahati.",
  },
  {
    name: "Ayushi Purohit",
    image: "/images/user2.jpg",
    message:
      "Felt like home — the hosts were warm and welcoming. The location was convenient, and every little detail showed genuine care for guests.",
  },
  {
    name: "Jay Patel",
    image: "/images/user3.jpg",
    message:
      "Cozy rooms and a calm neighborhood. Loved the decor and cleanliness. Highly recommend this homestay for anyone visiting the city!",
  },
];

export default function Gallery() {
  return (
    <main className="bg-theme-gradient text-[var(--text-primary)] overflow-hidden">
      {/* HEADER */}
      <section className="py-20 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-accent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Memories from <span className="text-accent-light">Restopia</span>
        </motion.h1>
      </section>

      {/* GALLERY GRID */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-accent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Space & Surroundings
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl border border-theme"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={`/images/gallery${i + 1}.jpg`}
                alt={`Gallery ${i + 1}`}
                className="object-cover w-full h-64 md:h-72 transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[var(--background)] border-t border-theme text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-accent mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Guests Say
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3 px-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-8 bg-[var(--gradient-end)] rounded-2xl shadow-md border border-theme relative flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Quote className="absolute top-6 left-6 text-accent-light w-6 h-6 opacity-50" />

              {/* USER IMAGE */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* TESTIMONIAL TEXT */}
              <p className="text-secondary italic mb-6 leading-relaxed">
                “{t.message}”
              </p>
              <h4 className="font-bold text-accent">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-accent-gradient text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Your Story Awaits at Restopia
        </h2>
        <a
          href="/ContactUs"
          className="bg-black text-accent font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[var(--gold-dark)] hover:text-black transition-transform transform hover:scale-105"
        >
          Book Your Stay
        </a>
      </section>
    </main>
  );
}
