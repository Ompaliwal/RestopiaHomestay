"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path: string) =>
    `block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      pathname === path
        ? "bg-accent text-black"
        : "text-[var(--text-primary)] hover:text-accent"
    }`;

  return (
    <nav className="bg-[var(--background)] border-b border-theme sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.jpg"
            alt="Restopia Homestay Logo"
            width={40}
            height={40}
            className="rounded-full transition-transform transform group-hover:scale-110"
            priority
          />
          <span className="text-xl font-bold text-accent group-hover:text-accent-light transition-colors">
            Restopia Homestay
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-3">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/AboutUs" className={linkClass("/AboutUs")}>
            About Us
          </Link>
          <Link href="/gallery" className={linkClass("/gallery")}>
            Gallery
          </Link>
          <Link href="/ContactUs" className={linkClass("/ContactUs")}>
            Contact
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-accent focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-theme">
          <div className="flex flex-col space-y-1 px-3 py-2">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/AboutUs" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/ContactUs" },
            ].map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                className={linkClass(path)}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
