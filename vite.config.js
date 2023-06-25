import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/react-movie-search-app/",
  plugins: [react()],
});
