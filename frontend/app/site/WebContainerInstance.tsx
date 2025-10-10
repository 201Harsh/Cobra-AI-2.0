import { WebContainer } from "@webcontainer/api";

let instance: WebContainer | null = null;
let bootPromise: Promise<WebContainer> | null = null;

export async function getWebContainer() {
  // already booted
  if (instance) return instance;

  // boot in progress — wait for it
  if (bootPromise) return bootPromise;

  // boot fresh
  bootPromise = WebContainer.boot().then((container) => {
    instance = container;
    return container;
  });

  return bootPromise;
}
