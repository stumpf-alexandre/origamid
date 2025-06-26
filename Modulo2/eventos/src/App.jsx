import React from 'react';
//Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).

const App = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }
  function handleScroll(event) {
    alert(event);
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <>
      <h1>Eventos</h1>
      <p>Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).</p>
      <div>
        <button onClick={handleClick}/*evento do botão*/>Bermuda</button>
      </div>
      <div>
        <button onMouseMove={handleClick}/*evento do mouse*/>Tênis</button>
      </div>
      <div style={{ height: '200vh' }}>
        <button onClick={(event) => alert(event.target.innerText)}/*executar uma função anônima no evento expecifico ou pequeno*/>
          Vamos Comprar
        </button>
      </div>
    </>
  );
};

export default App;
