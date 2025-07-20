import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  const { pathname } = window.location;

  let Pagina;
  if (pathname === '/') {
    Pagina = Home;
  } else {
    Pagina = Produtos;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
