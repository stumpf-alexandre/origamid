import React from 'react';

const App = () => {
  const nome = 'Origamid';
  const num = Math.random();
  const ativo = true;
  const titulo = <h1>Este é um titulo</h1>;
  return (
    <>
      {titulo}
      <h1>{nome}</h1>
      <a
        className="link"
        href="https://www.origamid.com"
        title="Isso é um site da Origamid"
        target="_blank" 
      >
        Origamin
      </a>
      <form>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Enviar</button>
      </form>
      <p>O número aleatório é: {num}</p>
      {/*Passando expressões*/}
      <p>{(num * 1000) / 50}</p>
      {/*Passando um valor como expressão, usando uma expressão ternaria*/}
      <p className={ativo ? 'ativo' : 'inativo'}>{(num * 100) / 39}</p>
    </>
  );
};

export default App;
