import React from 'react';
import Title from './Title';
import Produto from './Produto';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512 gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128 gb'] },
  ];
  return (
    <section>
      <Title texto="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos;
