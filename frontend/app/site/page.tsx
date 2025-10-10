"use client";
import React, { useState } from "react";
import WebContainerPreview from "./WebContainerPreview";

export default function EditorPage() {
  const [code, setCode] = useState(`
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
`);

  return (
    <div className="p-6 min-h-screen">
      <WebContainerPreview code={code} />
    </div>
  );
}
