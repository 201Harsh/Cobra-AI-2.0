import { WebContainer } from "@webcontainer/api";

let webcontainerInstance: any = null;

export async function getWebContainer() {
  if (webcontainerInstance) return webcontainerInstance;

  console.log("🟢 Booting WebContainer...");
  webcontainerInstance = await WebContainer.boot();
  console.log("✅ WebContainer ready");

  return webcontainerInstance;
}
