import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Configura a porta para 8080 conforme exigido pelos requisitos do projeto
    port: 8080,
    // Permite que o contêiner Docker escute em todas as interfaces de rede (0.0.0.0)
    host: true,
    // Habilita o suporte a polling para sistemas operacionais locais que não enviam eventos de arquivos
    watch: {
      usePolling: true,
    },
  },
  // Define o caminho base como relativo './' para correto funcionamento no GitHub Pages
  base: './',
});
