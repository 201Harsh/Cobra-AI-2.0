import { getWebContainer } from "./WebContainerInstance";

export async function runReactApp(
  userCode: any,
  onLog: any,
  onServerReady: any
) {
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
  await webcontainer.fs.writeFile("src/main.jsx", userCode);

  await webcontainer.fs.writeFile(
    "index.html",
    `
    <!DOCTYPE html>
    <html>
      <head><title>React Preview</title></head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  `
  );

  // Install dependencies
  const installProcess = await webcontainer.spawn("npm", ["install"]);
  installProcess.output.pipeTo(new WritableStream({ write: onLog }));

  await installProcess.exit;

  // Run Vite server
  const devServer = await webcontainer.spawn("npm", ["run", "dev"]);
  devServer.output.pipeTo(new WritableStream({ write: onLog }));

  webcontainer.on("server-ready", (port: number, url: string) => {
    onServerReady(url);
  });
}
