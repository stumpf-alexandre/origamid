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

  ## Ambiente Curso
- index.html
<link rel="stylesheet" href="./style.css" />

- public/style.css
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-title: Georgia, 'Times New Roman', Times, serif;
    --font-size: 1.2rem;
    --color: #19f;
    --color-light: #adf;
    --color-dark: #018;
    --radius: 0.2rem;
  }

  body {
    margin: 1.5rem;
  }

  body,
  input,
  textarea,
  button {
    font-size: var(--font-size);
    font-family: var(--font);
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-title);
  }

  h1,
  h2,
  h3,
  p,
  ul {
    margin: 1rem 0;
  }

  ul {
    list-style: square;
  }

  li {
    margin-bottom: 0.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
  }

  input,
  textarea {
    display: block;
    border: 1px solid #ccc;
    width: 100%;
    padding: 0.8rem;
    border-radius: var(--radius);
    background: #eee;
    transition: 0.2s;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--color);
    background: white;
    box-shadow: 0 0 0 3px var(--color-light);
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: var(--radius);
    transition: 0.1s;
    background: var(--color);
    color: var(--color-dark);
    padding: 0.8rem 1.6rem;
  }

  button:hover,
  button:focus {
    background: var(--color);
    box-shadow: 0 0 0 3px var(--color-light), 0 0 0 4px var(--color);
    outline: none;
  }

  button:active {
    box-shadow: 0 0 0 3px var(--color), 0 0 0 4px var(--color);
  }

  button:disabled {
    opacity: 0.5;
    cursor: wait;
  }

  hr {
    border: 2px solid black;
    margin: 2rem auto;
  }

- Esconder Arquivos
Não recomendo usar, mas eu irei durante o curso apenas para deixar a interface mais limpa:
.vscode/settings.json
  {
    "git.enabled": false,
    "files.exclude": {
      "node_modules": true,
      ".vscode": true,
      ".gitignore": true,
      "package.json": true,
      "package-lock.json": true,
      ".eslintrc.json": true,
      "vite.config.js": true,
      "public": true,
      "index.html": true
    }
  }

- Modo Estrito
O modo estrito do React permite pegarmos alguns bugs no desenvolvimento.

  - Sem o modo estrito
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);

  - Com o modo estrito
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );

- .js vs .jsx
Durante o curso você verá eu utilizando .js em arquivos jsx, o create-react-app permitia isso, porém o Vite não permite.

Então todo arquivo novo que você criar, use .jsx.
index.js > main.jsx


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
