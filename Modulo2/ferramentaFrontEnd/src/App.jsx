import React from 'react';

const App = () => {
  return (
    <>
      <a
        className="ativo"
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
    </>
  );
};

export default App;
