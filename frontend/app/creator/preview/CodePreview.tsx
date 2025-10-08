"use client";
import React, { useEffect, useRef } from "react";

const CodePreview = ({ code }: any) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc: any = iframeRef.current.contentDocument;
      iframeDoc.open();
      iframeDoc.write(code);
      iframeDoc.close();
    }
  }, [code]);
  return (
    <iframe
      ref={iframeRef}
      sandbox="allow-scripts allow-same-origin"
      className="w-full h-screen"
    />
  );
};

export default CodePreview;
