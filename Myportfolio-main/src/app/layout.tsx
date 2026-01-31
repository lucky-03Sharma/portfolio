import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-body'
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-heading'
});

export const metadata: Metadata = {
  title: "Lucky Sharma | Full Stack Developer & Computer Engineering Student",
  description: "Portfolio of Lucky Sharma - Computer Engineering student specializing in modern web development, MERN stack, and UI/UX design. Building scalable, performance-focused applications.",
  keywords: ["Lucky Sharma", "Computer Engineering", "Full Stack Developer", "Web Development", "MERN Stack", "React", "Node.js", "UI/UX Design", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
