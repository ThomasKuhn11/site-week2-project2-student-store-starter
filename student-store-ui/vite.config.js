import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig((envConfig) => ({
  plugins: [react()],
  server: {
    port: 3003,
    open: true,
    host: true,
  },
}))
