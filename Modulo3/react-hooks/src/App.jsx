import React from 'react';

const App = () => {
  const ativo = false;
  return <button disabled={!ativo}>{ativo ? 'Ativo' : 'Inativo'}</button>;
};

export default App;