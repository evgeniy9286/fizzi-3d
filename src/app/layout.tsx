import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header, ViewCanvas } from "@/components/shared";

const alpino = localFont({
  src: "./fonts/AlpinoVariable.woff",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export const metadata: Metadata = {
  title: "Fizzi 3D",
  description:
    "Demo application, developed on NextJs 15 (TypeScript), TailwindCSS, GSAP, ThreeJS",
  authors: [
    {
      name: "Evgeniy Makhnin",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        <main>{children}
          <ViewCanvas/>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
