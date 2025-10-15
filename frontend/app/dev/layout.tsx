// app/creator/layout.tsx
import "../globals.css";
import React from "react";
import type { Metadata } from "next";
import ProtectedRoute from "../Custom/ProtectedRoute";

const BaseUrl = process.env.SEO_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BaseUrl),
  title: "Cobra AI - Dev Dashboard",
  description:
    "Cobra AI 2.0 Dev Dashboard — Manage your projects, generate code with AI assistance, monitor real-time development, and boost your productivity with intelligent full-stack tools.",
  authors: [
    { name: "Harsh Pandey", url: "https://www.instagram.com/201harshs/" },
  ],
  icons: {
    icon: "/img/Seoimg.png",
    shortcut: "/img/Seoimg.png",
  },
};

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProtectedRoute>
        <div className="font-inter">{children}</div>;
      </ProtectedRoute>
    </>
  );
}
