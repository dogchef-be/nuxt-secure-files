import { Plugin } from "@nuxt/types";

enum FILE_FORMATS {
  BASE64,
}

async function download(
  format: FILE_FORMATS,
  path: string,
  filename: string
): Promise<void> {
  const { data } = await window.$nuxt.$axios.get(path);

  const link = document.createElement("a");

  link.href = data;
  link.download = filename;
  link.click();
  link.remove();
}

function base64(path: string, filename: string) {
  return download(FILE_FORMATS.BASE64, path, filename);
}

const secureFilesPlugin: Plugin = (ctx, inject): void => {
  inject("secDownload", {
    base64,
  });
};

export default secureFilesPlugin;
