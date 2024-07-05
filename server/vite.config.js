import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define global object
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window', // this will define global as window in browser
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "slick-carousel/slick/slick.css"; @import "slick-carousel/slick/slick-theme.css";`
      },
    },
  },
});
