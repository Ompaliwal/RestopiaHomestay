"use client";

import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[var(--background)] text-secondary border-t border-theme">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-left">
        <div>
          <h3 className="text-2xl font-bold text-accent mb-3">
            Restopia Homestay
          </h3>
          <p>
            A comfortable and convenient 3-star homestay in Guwahati —
            offering modern amenities and peaceful surroundings.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Gallery", "Contact"].map((t) => (
              <li key={t}>
                <a href={`/${t === "Home" ? "" : t.replace(" ", "")}`} className="hover:text-accent transition">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-3">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>24, Namghar Path, Guwahati, Assam 781037</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>070992 30800</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span>info@restopiahomestay.com</span>
            </li>
          </ul>
          <div className="flex justify-start mt-5 space-x-4">
            <a
              href="https://www.instagram.com/restopia.official"
              className="text-accent hover:opacity-80"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-theme py-4 text-center text-sm">
        © {new Date().getFullYear()} Restopia Homestay. All rights reserved.
        <p className="text-xs mt-1 text-accent-light">
          Designed with ❤️ by{" "}
          <a
            href="https://bagora.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            Bagora Agency
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
