import React from 'react';
import Form from './Form/Form';

const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.text}</h1>;
};

const TituloDesestruturado = ({ color, texto }) => {
  return <h1 style={{ color }}>{texto}</h1>;
};

const TituloChildren = ({ color, text, children }) => {
  return (
    <h1 style={{ color }}>
      {text}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      <h1>Propriedades</h1>
      <p>
        Assim como uma função pode receber argumentos, podemos também passar
        argumentos aos componentes. Esses são conhecidos como propriedades ou
        props.
      </p>
      <div>
        <Titulo cor="red" text="Meu titulo 1" />
        <Titulo cor="blue" text="Meu titulo 2" />
        <Titulo cor="green" text="Meu titulo 3" />
      </div>
      <hr />
      <h2>Desestruturação</h2>
      <p>É comum desestruturarmos as propriedades.</p>
      <div>
        <TituloDesestruturado color="red" texto="Meu titulo 1" />
        <TituloDesestruturado color="blue" texto="Meu titulo 2" />
        <TituloDesestruturado color="green" texto="Meu titulo 3" />
      </div>
      <hr />
      <h2>Children</h2>
      <p>
        Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo
        interno deste será acessado através da propriedade children.
      </p>
      <div>
        <TituloChildren color="red" text="Meu titulo 1">
          Isso é o children
        </TituloChildren>
        <TituloChildren color="blue" text="Meu titulo 2">
          Isso também é o children
        </TituloChildren>
        <TituloChildren color="green" text="Meu titulo 3">
          aqui também é o children
          <p>Teste</p>
        </TituloChildren>
      </div>
      <hr />
      <h2>Rest e Spread</h2>
      <p>
        Usamos o rest e spread quando não sabemos todas as propriedades que um
        componente pode receber.
      </p>
      <div>
        <Form />
      </div>
    </>
  );
};

export default App;
