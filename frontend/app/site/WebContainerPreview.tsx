"use client";
import React, { useEffect, useState } from "react";
import { runReactApp } from "./WebContainerRunner";
import LoadingScreen from "../auto/LoadingScreen";

export default function WebContainerPreview({ code }: any) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [IsLoading, setIsLoading] = useState<boolean>(true);

  const handleRun = async () => {
    setIsLoading(true);
    await runReactApp(code, (url: string) => {
      setPreviewUrl(url);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    handleRun();
  }, [code]);

  if (IsLoading) {
    return (
      <>
        <LoadingScreen />
      </>
    );
  }

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
