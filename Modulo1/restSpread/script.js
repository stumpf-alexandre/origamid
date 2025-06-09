//Função para printar o nome de uma pessoa e a empresa em que trabalha
function showList(empresa, clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Google', ['Alexandre', 'Dionatas']);

//Utilizando o Rest (pegar o restante dos argumentos e coloca em um array)
function showList2(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList2('Google', 'Aline', 'João', 'Maria', 'Pedro');

//Utilizando o Spread (pegar um array e espalhar os valores)
const maior = Math.max(10, 20, 30, 40, 50);
console.log(maior);

//tendo um array de numeros
const numeros = [10, 20, 30, 40, 50];
//utilizando o spread para passar os valores do array como argumentos
const maior2 = Math.max(...numeros);
console.log(maior2);

//acrescentar novos numeros sem alterar o array
const numeros2 = [-10, -20, ...numeros, 60, 70, 80];
console.log(numeros2);
//tambem usado em objetos
const carro = {
  cor: 'Azul',
  portas: 4,
};

console.log(carro);
//utilizando o spread para criar um novo objeto com as mesmas propriedades do carro e adicionar uma nova propriedade
const carroAno = {...carro, ano: 2020,};
console.log(carroAno);