import "../globals.css";
import Head from "next/head";
import React from "react";

const BaseUrl: any = process.env.SEO_URL;

export const metadata = {
  metadataBase: new URL(BaseUrl),
  title: "Cobra AI - Creator Dashboard",
  description:
    "Cobra AI 2.0 Creator Dashboard — Build, manage, and deploy AI-powered websites effortlessly.",
  icons: {
    icon: "/img/logo.png",
    shortcut: "/img/logo.png",
  },
};

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
      <body suppressHydrationWarning className=" font-inter">
        {children}
      </body>
    </html>
  );
}
