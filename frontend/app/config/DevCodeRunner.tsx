import { getDevWebContainer } from "./DevCodeBoot";

export async function runDevProject(
  userFiles: Record<string, string>, // dev's optional frontend.jsx and other files
  onOutput: (msg: string) => void,
  onPreviewReady: (url: string) => void
) {
  const container = await getDevWebContainer();

  // 🔒 Locked core files
  const lockedFiles: Record<string, string> = {
    "index.html": `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cobra AI Frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.jsx"></script>
  </body>
</html>
    `.trim(),

    "main.jsx": `
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Render frontend.jsx directly
import Frontend from "./frontend.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Frontend />
  </React.StrictMode>
);
    `.trim(),

    "index.css": `
    body::-webkit-scrollbar {
  display: none;
}
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #1f2937;
  color: white;
}
    `.trim(),

    "backend.js": `
// Simple backend (ES module)
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
    `.trim(),

    "package.json": `
{
  "name": "cobra-ai-project",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "start": "node backend.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^4.4.5",
    "@vitejs/plugin-react": "^4.0.3"
  }
}
    `.trim(),

    "vite.config.js": `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 }
});
    `.trim(),
  };

  // Merge locked files + dev files (frontend.jsx comes from dev)
  const files: Record<string, { file: { contents: string } }> = {};
  for (const [name, content] of Object.entries({
    ...lockedFiles,
    ...userFiles,
  })) {
    files[name] = { file: { contents: content } };
  }

  // Mount files to container
  await container.mount(files);

  // Install dependencies
  onOutput("📦 Installing dependencies...");
  const installProcess = await container.spawn("npm", ["install"]);
  installProcess.output.pipeTo(
    new WritableStream({
      write(data) {
      },
    })
  );
  const installExit = await installProcess.exit;
  if (installExit !== 0) {
    return;
  }

  // Start backend
  onOutput("🚀 Starting backend server...");
  const backendProcess = await container.spawn("npm", ["run", "start"]);
  backendProcess.output.pipeTo(
    new WritableStream({
      write(data) {},
    })
  );

  // Start frontend (Vite)
  onOutput("🎨 Starting frontend server...");
  const frontendProcess = await container.spawn("npm", ["run", "dev"]);
  frontendProcess.output.pipeTo(
    new WritableStream({
      write(data) {},
    })
  );

  // Listen for server-ready events
  container.on("server-ready", (port: number, url: string) => {
    if (port === 5173) {
      onPreviewReady(url); // frontend iframe
    }
    if (port === 3000) {
    }
  });

  return { container, frontendProcess, backendProcess };
}
