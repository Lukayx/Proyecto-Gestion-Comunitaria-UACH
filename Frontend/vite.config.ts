import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],server :{
    host: process.env.VITE_APP_HOST,
    port: parseInt(process.env.VITE_APP_PORT),
  },
})

