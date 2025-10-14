import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Cobra AI 2.0 – Intelligent Coding Platform for Developers",
  description:
    "Cobra AI 2.0 is a full-stack AI-powered coding platform that helps developers write, run, and debug code in real-time. Boost your productivity with intelligent code suggestions, live previews, and collaborative coding tools.",
  keywords: [
    "Cobra AI 2.0",
    "Cobra",
    "Cobra AI Website Builder",
    "AI website generator",
    "WebSite Builder",
    "AI website builder",
    "text to website",
    "AI website generator",
    "one-click website creation",
    "AI landing page builder",
    "no-code website builder",
    "automated website design",
    "AI web app creator",
    "instant website builder",
    "AI site generator",
    "create website from text",
    "AI content to website",
    "smart website builder",
    "website automation tools",
    "AI homepage generator",
    "AI template builder",
    "AI website creation platform",
    "AI powered website",
    "responsive website builder",
    "text to web app",
    "AI landing page generator",
    "automated web design",
    "intelligent website builder",
    "AI SaaS website creator",
    "instant web page generator",
    "AI website prototyping",
    "fast website creation",
    "AI web design platform",
    "no-code web app builder",
    "Cobra AI",
    "AI coding platform",
    "full-stack development",
    "AI code suggestions",
    "React",
    "Node.js",
    "Express.js",
    "MERN stack",
    "live code preview",
    "AI development tools",
  ],
  authors: [
    { name: "Harsh Pandey", url: "https://www.instagram.com/201harshs/" },
  ],
  creator: "Cobra AI 2.0",
  publisher: "Cobra AI 2.0",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Cobra AI 2.0 – Intelligent Coding Platform",
    description:
      "Boost your coding productivity with Cobra AI's real-time collaborative coding, AI suggestions, and live previews.",
    url: "https://cobra-ai.com", // replace with your actual URL
    siteName: "Cobra AI 2.0",
    images: [
      {
        url: "/img/Seoimg.png", // your OG image
        width: 1200,
        height: 630,
        alt: "Cobra AI 2.0 – Intelligent Coding Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const inter = localFont({
  src: "../public/fonts/ProximaNova-Regular.otf",
  weight: "400",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
      />
      <html lang="en">
        <body className={`${inter.variable}`}>{children}</body>
      </html>
    </>
  );
}
