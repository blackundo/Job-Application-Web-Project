import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";

// import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint(),

    // Workaround
    {
      name: "load+transform-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) {
          return null;
        }

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic", // 👈 this is important
        });
      },
    },
    // End workaround
  ],
  build: {chunkSizeWarningLimit: 4500}
  // Workaround before renaming .js to .jsx
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  commonjsOptions: {
    esmExternals: true,
  },
  server: {
    port: 5173,
  },
});
