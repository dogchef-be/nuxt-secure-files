import path from "path";
import { downloadFile } from "./plugin";

declare module "vue/types/vue" {
  interface Vue {
    $secDownload: typeof downloadFile;
  }
}

export default function MapsModule(this: any): void {
  this.addPlugin({
    src: path.resolve(__dirname, "plugin.js"),
    ssr: "false",
  });
}
