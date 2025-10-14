// src/site/WebContainerDev.ts
import { WebContainer } from "@webcontainer/api";

let devInstance: WebContainer | null = null;
let devBootPromise: Promise<WebContainer> | null = null;

export async function getDevWebContainer() {
  if (devInstance) return devInstance;

  if (devBootPromise) return devBootPromise;

  devBootPromise = WebContainer.boot().then((container) => {
    devInstance = container;
    return container;
  });

  return devBootPromise;
}
