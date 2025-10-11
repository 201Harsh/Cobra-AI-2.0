import { getWebContainer } from "./WebContainerInstance";

export async function runReactApp(userCode: any, onServerReady: any) {
  const webcontainer = await getWebContainer();

  // Create basic project structure
  await webcontainer.fs.writeFile(
    "package.json",
    JSON.stringify({
      name: "react-playground",
      type: "module",
      scripts: { dev: "vite" },
      dependencies: { react: "latest", "react-dom": "latest", vite: "latest" },
    })
  );

  // Write Vite main files
  await webcontainer.fs.mkdir("src", { recursive: true });

  await webcontainer.fs.writeFile(
    "src/main.jsx",
    `
  import React from "react";
  import { createRoot } from "react-dom/client";
  import UserApp from "./UserApp.jsx";

  const root = createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <UserApp />
    </React.StrictMode>
  );
  `
  );

  await webcontainer.fs.writeFile("src/UserApp.jsx", userCode);
  await webcontainer.fs.writeFile(
    "index.html",
    `
    <!DOCTYPE html>
    <html>
      <head>
      <title>React Preview</title>
      <style>
      body::-webkit-scrollbar {
        display: none;
      }
      </style>
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  `
  );

  // Install dependencies
  const installProcess = await webcontainer.spawn("npm", ["install"]);

  await installProcess.exit;

  // Run Vite server
  const devServer = await webcontainer.spawn("npm", ["run", "dev"]);

  webcontainer.on("server-ready", (port: number, url: string) => {
    onServerReady(url);
  });
}
