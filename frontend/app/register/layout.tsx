// app/creator/layout.tsx
import "../globals.css";
import React from "react";
import type { Metadata } from "next";
import AutoRedirect from "../Custom/AutoRedirect";

const BaseUrl = process.env.SEO_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BaseUrl),
  title: "Cobra AI - Creator Dashboard",
  description:
    "Cobra AI 2.0 Creator Dashboard — Build, manage, and deploy AI-powered websites effortlessly.",
  authors: [
    { name: "Harsh Pandey", url: "https://www.instagram.com/201harshs/" },
  ],
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
    <>
      <AutoRedirect>
        <div className="font-inter">{children}</div>;
      </AutoRedirect>
    </>
  );
}
