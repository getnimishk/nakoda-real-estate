import { resolve } from 'path';
import { defineConfig } from 'vite';

function htmlBasePlugin() {
  let config;
  return {
    name: 'html-base-transform',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    transformIndexHtml(html) {
      const base = config.base;
      if (!base || base === '/') return html;
      const cleanBase = base.replace(/\/$/, '');
      return html
        .replace(/href="\/(?!\/)(.*?)"/g, (match, path) => {
          if (path.startsWith('http') || path.startsWith('//') || path.startsWith('tel:') || path.startsWith('mailto:') || path.startsWith('#')) {
            return match;
          }
          return `href="${cleanBase}/${path}"`;
        })
        .replace(/src="\/(?!\/)(.*?)"/g, (match, path) => {
          if (path.startsWith('http') || path.startsWith('//')) {
            return match;
          }
          return `src="${cleanBase}/${path}"`;
        });
    }
  };
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [htmlBasePlugin()],
  root: '.',
  publicDir: 'public',
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  preview: {
    host: '0.0.0.0',
    port: 4173
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services/index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        nakodaSolitaire: resolve(__dirname, 'projects/nakoda-solitaire/index.html'),
        whyNakoda: resolve(__dirname, 'why-nakoda/index.html'),
        whyNipania: resolve(__dirname, 'why-nipania/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
});
