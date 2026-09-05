import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeshan Akram | Frontend-Focused MERN Stack Developer",
  description:
    "Portfolio of Zeshan Akram, a frontend-focused MERN Stack Developer specializing in React.js, Next.js, Redux, Node.js, Express, MongoDB, and high-performance UI engineering.",
  keywords: [
    "Zeshan Akram",
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer Lahore",
    "Tailwind CSS",
    "Framer Motion",
  ],
  authors: [{ name: "Zeshan Akram" }],
  creator: "Zeshan Akram",
  openGraph: {
    title: "Zeshan Akram | MERN Stack & Frontend Developer",
    description:
      "Frontend-focused MERN Stack Developer with 1+ year of experience building responsive, high-performance web applications using React.js and Next.js.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#13382f] antialiased font-sans flex flex-col selection:bg-[#d4f938] selection:text-[#13382f]">
        {children}
      </body>
    </html>
  );
}
