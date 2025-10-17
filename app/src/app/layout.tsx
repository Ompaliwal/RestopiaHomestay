import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout"; // ✅ Client-side wrapper for layout components

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * ✅ SITE-WIDE SEO CONFIGURATION
 * This data automatically applies to all pages.
 */
export const metadata: Metadata = {
  title: {
    default: "Restopia Homestay | Comfortable Stay in Guwahati",
    template: "%s | Restopia Homestay",
  },
  description:
    "Restopia Homestay offers a peaceful 3-star stay in Guwahati, Assam — featuring free Wi-Fi, air-conditioned rooms, parking, and warm hospitality near Panjabari Road.",
  keywords: [
    "Restopia Homestay",
    "Homestay in Guwahati",
    "3 star hotel in Guwahati",
    "Restopia Assam",
    "Budget stay Guwahati",
    "Restopia Guwahati",
  ],
  authors: [{ name: "Restopia Homestay" }, { name: "Bagora Agency", url: "https://bagoraagency.com" }],
  creator: "Bagora Agency",
  publisher: "Restopia Homestay",
  metadataBase: new URL("https://restopiahomestay.com"), // 🔗 replace with your real domain
  openGraph: {
    title: "Restopia Homestay | Comfortable Stay in Guwahati",
    description:
      "Book your stay at Restopia Homestay — a peaceful and comfortable 3-star property in Guwahati, Assam. Perfect for both business and leisure travelers.",
    url: "https://restopiahomestay.com",
    siteName: "Restopia Homestay",
    images: [
      {
        url: "https://restopiahomestay.com/og-image.jpg", // 🖼️ Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Restopia Homestay - Comfortable Stay in Guwahati",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restopia Homestay | Comfortable Stay in Guwahati",
    description:
      "Enjoy a cozy, air-conditioned stay with free Wi-Fi and parking at Restopia Homestay, Guwahati.",
    images: ["https://restopiahomestay.com/og-image.jpg"], // 🖼️ same image
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
