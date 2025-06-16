import React from 'react';

//Exercício:
// Mostre os dados da aplicação, como aprensetado abaixo:

//Nome: Luana
//Idade: 27
//Situação: Ativa
//Total gastos: R$ 7000
//ou
//Nome: Mario
//Idade: 31
//Situação: Inativa
//Total gastos: R$ 10500
//Você está gastando muito.

// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};
const App = () => {
  const nome = 'Origamid';
  const num = Math.random();
  const ativo = true;
  const titulo = <h1>Este é um titulo</h1>;

  function mostrarNome(sobrenome) {
    return 'Alexandre ' + sobrenome;
  }

  //objeto
  const carro = {
    marca: 'Ford',
    modelo: 'Ka',
    ano: 2020,
  };

  //estyle
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  const dados = mario; // ou mario

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);
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
      <p style={{ color: 'green', fontSize: '20px' }}>
        Outro jeito de passar estilo
      </p>
      <br />
      <div>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>
          Situação:{' '}
          <span style={{ color: dados.ativa ? 'green' : 'red' }}>
            {dados.ativa ? 'Ativa' : 'Inativa'}
          </span>
        </p>
        <p>Total: R$ {total}</p>
        <p>{total > 10000 && 'Você está gastando muito'}</p>
      </div>
    </>
  );
};

export default App;
