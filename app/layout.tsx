export const dynamic = "force-dynamic";
import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Maryam Habibpour",
  description: "web developer",
  icons: {
    icon: "/maryam.jpg",
  },
};

export const viewport: Viewport = {
  themeColor:
    "linear-gradient(to bottom,rgb(218, 100, 126) 0%,rgb(228, 187, 195) 50%, rgba(15, 14, 15, 0) 100%)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
