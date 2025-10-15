// app/creator/layout.tsx
import "../globals.css";
import React from "react";
import AutoRedirect from "../Custom/AutoRedirect";

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
