import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const alpinoVariable = localFont({
  src: "./fonts/Alpino-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fizz 3D",
  description:
    "Demo application, developed on NextJs 15, TailwindCSS, GSAP, ThreeJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alpinoVariable.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
