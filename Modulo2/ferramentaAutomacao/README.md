# Ferramentas de automação
São instaladas via linhas de códigos.

## Bundler
Agrupa o código do seu aplicativo;
Permite definir os componentes em diferentes arquivos para melhor organização;
Facilita a importação de código externo instalado via NPM;
Ex.: ESBuild, Rollup, Parcel, Turbopack, Webpack.

## Transpiller
Transforma JSX (return <div></div>) em funções de React (React.createElement());
Transforma Javascript novo (const) em Javascript antigo (var);
Ex.: Babel, SWC, ESBuild

## O node.js deve estar instalado na maquina

## Iniciando um package.json com npm
- npm init -y
- criar um arquivo index.html
- criar um arquivo main.jsx, dentro de uma pasta src

## Instalar o ESBuild
- npm install esbuild
- Adicionar os scripts de desenvolvimento e build ao package.json, trocando pelo que esta no package.json.
"scripts": {
  "start": "esbuild --bundle src/main.jsx --outfile=main.js --servedir=./ --watch",
  "build": "esbuild --bundle src/main.jsx --outfile=main.js"
},

## Instalar o React e o ReactDOm
- npm install react react-dom
  
## Com o comando npm run build
- é criado o build final ou o arquivo main.js na raiz do app
- após tudo pronto roda o app com o comando npm start