//Objeto
const menu = {
  //propriedade
  seletor: '.principal',
};

console.log(menu.seletor);
console.log(menu.seletor.toUpperCase());

//Função
function upperName(name) {
  return name.toUpperCase();
}

console.log(upperName('Guilherme'));

//Aerofunction
const lowerName = (name) => {
  return name.toLowerCase();
}

console.log(lowerName('GuilhERME'));

//ou reduzindo a sintaxe da aerofunction
const lowerName2 = (name) => name.toLowerCase();

console.log(lowerName2('JuLIa'));

//Criando uma função juntamente com uma expressão
//Função anônima
const upperName2 = function(name) {
  return name.toUpperCase();
}

console.log(upperName2('Julia'));