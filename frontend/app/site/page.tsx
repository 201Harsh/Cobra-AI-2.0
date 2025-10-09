"use client";
import React, { useState } from "react";
import WebContainerPreview from "./WebContainerPreview";

export default function EditorPage() {
  const [code, setCode] = useState(`
import React from 'react';
import ReactDOM from 'react-dom/client';
function App() {
  return <h1>Hello from WebContainer React!</h1>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
`);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">React WebContainer Playground</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        className="w-full border p-2 font-mono text-sm rounded"
      />
      <WebContainerPreview code={code} />
    </div>
  );
}
