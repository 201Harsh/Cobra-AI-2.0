"use client";
import React, { useEffect, useState } from "react";
import { runReactApp } from "./WebContainerRunner";

export default function WebContainerPreview({ code }: any) {
  const [logs, setLogs] = useState<any[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleRun = async () => {
    setLogs([]);
    await runReactApp(code, (url: string) => setPreviewUrl(url));
  };

  useEffect(() => {
    handleRun();
  }, [code]);

  return (
    <div className="space-y-4 h-screen  w-full">
      {previewUrl && (
        <iframe
          src={previewUrl}
          className="w-full h-full border"
          title="Cobra AI Preview"
        />
      )}
    </div>
  );
}
