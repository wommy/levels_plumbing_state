import solid from "solid-start/vite";
import { defineConfig } from "vite";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [solid(),Unocss()],
});
