"use client";
import React, { useEffect, useState } from "react";
import WebContainerPreview from "../WebContainerPreview";

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
    <div className="scrollbar-hide min-h-screen">
      <WebContainerPreview code={code} />
    </div>
  );
}
