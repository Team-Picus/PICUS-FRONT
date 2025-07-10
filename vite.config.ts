import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.gif'],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@app',
        replacement: path.resolve(__dirname, 'src/app'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@home',
        replacement: path.resolve(__dirname, 'src/pages/home'),
      },
      {
        find: '@my',
        replacement: path.resolve(__dirname, 'src/pages/my'),
      },
      {
        find: '@chat',
        replacement: path.resolve(__dirname, 'src/pages/chat'),
      },
      {
        find: '@explore',
        replacement: path.resolve(__dirname, 'src/pages/explore'),
      },
      {
        find: '@shared',
        replacement: path.resolve(__dirname, 'src/shared'),
      },
      {
        find: '@icon',
        replacement: path.resolve(__dirname, 'src/shared/assets/icon'),
      },
      {
        find: '@image',
        replacement: path.resolve(__dirname, 'src/shared/assets/image'),
      },
      {
        find: '@widget',
        replacement: path.resolve(__dirname, 'src/widget'),
      },
    ],
  },
});
