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
      (data: any) => setLogs((prev) => [...prev, data]),
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

      <div className="border p-2 h-40 overflow-y-auto bg-black text-green-400 text-sm">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>

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
