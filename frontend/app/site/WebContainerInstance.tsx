import { WebContainer } from "@webcontainer/api";

let webcontainerInstance: any = null;

export async function getWebContainer() {
  if (webcontainerInstance) return webcontainerInstance;

  webcontainerInstance = await WebContainer.boot();

  return webcontainerInstance;
}
