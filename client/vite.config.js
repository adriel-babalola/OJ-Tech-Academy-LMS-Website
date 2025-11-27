import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Set to 'true' to listen on all local IPs, 
    // including your LAN address.
    host: true 
  }
})
