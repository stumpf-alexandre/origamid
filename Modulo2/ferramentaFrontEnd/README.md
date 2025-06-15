# Ferramenta iniciante para React

## Vite
Cria um ambiente de desenvolvimento já configurado e orimizado para a criação de aplicativos com React.
  [https://vitejs.dev/](https://vitejs.dev/)
Na pasta que deseja instalar:
- npm create vite@latest .
- npm install
- Seguir o prompt > React > JavaScript
- Eliminamos todo o codigo que não é essencial, deixando uma extrutura minima
- Estrutura Mínima
Abaixo os arquivos essenciais.
  - node_modules
  - public
  - src
    - App.jsx
    - main.jsx
  - index.html
  - package.json
  - package-lock.json
  - vite.config.js

Código mínimo para o index.html
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>React</title>
    </head>

    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </body>
  </html>

Código mínimo para o main.jsx
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);

Código mínimo para o App.jsx
  import React from 'react';

  const App = () => {
    return <div>App React</div>;
  };

  export default App;

Comandos
Inicia o desenvolvimento
- npm run dev

Cria a build final
- npm run build

ESLint
Configurar o eslint
  module.exports = {
    env: {
      browser: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unsafe-finally': 'off',
      'no-unused-vars': 'off',
      'react/jsx-key': 'off',
    },
  };


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.