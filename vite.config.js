// vite.config.js
import * as path from 'path';

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
}