"use client";
import React, { useState } from "react";
import { runReactApp } from "./WebContainerRunner";

export default function WebContainerPreview({ code }: any) {
  const [logs, setLogs] = useState<any[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleRun = async () => {
    setLogs([]);
    await runReactApp(
      code,
      (url: string) => setPreviewUrl(url)
    );
  };

  return (
    <div className="p-4 space-y-4">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleRun}
      >
        ▶ Run in WebContainer
      </button>

      {previewUrl && (
        <iframe
          src={previewUrl}
          className="w-full h-[500px] border rounded"
          title="Preview"
        />
      )}
    </div>
  );
}
