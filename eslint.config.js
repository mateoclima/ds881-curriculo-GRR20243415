import js from '@eslint/js';
import globals from 'globals';

export default [
  // Utiliza as regras recomendadas padrão do ESLint para JavaScript
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Habilita as variáveis globais de ambiente de navegador (ex: window, document)
        ...globals.browser,
        // Habilita variáveis globais do Node.js
        ...globals.node,
      },
    },
    rules: {
      // Alerta para variáveis declaradas mas não utilizadas
      'no-unused-vars': 'warn',
      // Permite o uso do console.log para fins de testes/simulação no contato
      'no-console': 'off',
    },
  },
];
