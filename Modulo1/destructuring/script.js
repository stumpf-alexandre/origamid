//Destructuring ou destruturação
function handleMouse(event) {
  console.log(`Criando um evento, ${event}`);
}

document.addEventListener("click", handleMouse);

//Desestruturando o objeto event
function handleMouse2(event) {
  console.log(`Desestruturando o evento, ${event.clientX}`);
}

document.addEventListener("click", handleMouse2);

//colocando a desestruturação em uma constante
function handleMouse3(event) {
  const x = event.clientX;
  const y = event.clientY;

  console.log(`Desestruturando em constantes ${x}, ${y}`);
}

document.addEventListener("click", handleMouse3);

//criando a desestruturação mais simples
function handleMouse4(event) {
  const { clientX, clientY } = event;
  console.log(`Simplificando a desestruturação ${clientX}, ${clientY}`);
}

document.addEventListener("click", handleMouse4);

//ou mais simples ainda
function handleMouse5({ clientX, clientY }) {
  console.log(`Mais simples a desestruturação ${clientX}, ${clientY}`);
}

document.addEventListener("click", handleMouse5);

//Desestruturação de arrays
const frutas = ["Banana", "Uva", "Maçã", "Pera"];
const [fruta1, fruta2, fruta3, fruta4] = frutas;
console.log(fruta3);
console.log(fruta1);
console.log(fruta2);
console.log(fruta4);

//Desestruturação dos React Hooks
const useQuadrados = [
  4,
  function(lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrados;
console.log(`Quantidade de lados de um quadrado: ${lados}`);
console.log(`Quantidade do perimetro do quadrado com 10 cm cada lado: ${perimetro(10)} cm`);