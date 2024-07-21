import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.js",
      name: "GalaxiesAccessLayer",
      fileName: (format) => `galaxies-access-layer.${format}.js`,
    },
    rollupOptions: {
      external: ["firebase"],
      output: {
        globals: {
          firebase: "firebase",
        },
      },
    },
  },
});
