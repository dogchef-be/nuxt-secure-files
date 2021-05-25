import { Plugin } from "@nuxt/types";

export const downloadFile = async function download(
  path: string,
  filename: string,
  mode?: "base64" | "blob" // TO-DO: Support blob
): Promise<void> {
  const { data } = await window.$nuxt.$axios.get(path);

  const link = document.createElement("a");

  link.href = data;
  link.download = filename;
  link.click();
  link.remove();
};

const secureFilesPlugin: Plugin = (ctx, inject): void => {
  inject("secDownload", downloadFile);
};

export default secureFilesPlugin;
