import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Cash Caddy",
        short_name: "CashCaddy",
        description: "A personal finance app for tracking expenses, setting budgets, and achieving financial goals.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#009688",
        icons: [
          {
            src: "favicon.ico",
            sizes: "48x48",
            type: "image/x-icon"
          },
          {
            src: "/logo/logo192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logo/logo512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
})
