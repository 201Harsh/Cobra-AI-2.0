// src/components/WebPreview.tsx
import React from "react";

interface WebPreviewProps {
  previewUrl: string | null;
}

const WebPreview: React.FC<WebPreviewProps> = ({ previewUrl }) => {
  if (!previewUrl) {
    return (
      <div className="text-gray-400 text-sm p-4 border border-gray-700 rounded-lg bg-gray-900">
        🪞 Preview will appear here after running your project.
      </div>
    );
  }

  return (
    <iframe
      src={previewUrl}
      className="w-full h-[400px] mt-4 rounded-lg"
      sandbox="allow-scripts allow-same-origin"
    />
  );
};

export default WebPreview;
