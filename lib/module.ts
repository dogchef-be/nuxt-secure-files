import path from "path";

declare module "vue/types/vue" {
  interface Vue {
    $secDownload: {
      base64(path: string, filename: string): void;
    };
  }
}

export default function MapsModule(this: any): void {
  this.addPlugin({
    src: path.resolve(__dirname, "plugin.js"),
    ssr: "false",
  });
}
