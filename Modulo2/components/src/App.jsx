import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const App = () => {
  return (
    <>
      <h1>Components</h1>
      <p>O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo</p>
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default App;
