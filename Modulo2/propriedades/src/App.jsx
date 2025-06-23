import React from 'react';

const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.text}</h1>;
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
    </>
  );
};

export default App;
