import React from 'react';

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace('R$ ', '')) > 1500,
  );

  return (
    <>
      <h1>JSX com Arrays</h1>
      <p>O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.</p>

      <p>O JSX necessita de uma key única para cada elemento da Array. </p>

      <p>É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.</p>

      <ul>
        {filmes.map((filme, index) => (
          <li key={filme}>
            {index} {filme}
          </li>
        ))}
      </ul>
      <ul>
        {livros
          .filter(({ ano }) => ano >= 1998)
          .map(({ nome, ano }) => (
            <li key={nome}>
              {nome}, {ano}
            </li>
          ))}
      </ul>
      <hr />
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>{preco}</p>
          <ul>
            {cores.map((cor) => (
              <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default App;
