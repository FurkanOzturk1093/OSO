import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ClientSideRouting = {
  name: "dynamic-router",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.search(/^\/@\d+/) !== -1) {
        req.url = "/";
      }
      next();
    });
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,
    open: true,
  },
});
