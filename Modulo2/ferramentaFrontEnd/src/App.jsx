import React from 'react';

const App = () => {
  const nome = 'Origamid';
  const num = Math.random();
  const ativo = true;
  const titulo = <h1>Este é um titulo</h1>;

  function mostrarNome(sobrenome) {
    return "Alexandre " + sobrenome;
  }

  //objeto
  const carro = {
    marca: 'Ford',
    modelo: 'Ka',
    ano: 2020,
  }
  //estyle
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  }
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
      {mostrarNome('Stumpf')}
      <p>{new Date().getDate()}</p>
      <p>{carro.marca}</p>
      <p>{carro.modelo}</p>
      <p>{carro.ano}</p>
      {/*
      Não posso passar apenas o objeto
      <p>{carro}</p>
      */}
      <h1 style={estiloH1}>Estilo em linha</h1>
      <p style={{color:'green', fontSize: '20px' }}>Outro jeito de passar estilo</p>
    </>
  );
};

export default App;
