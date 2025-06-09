//filtrando um array com filter
const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagas',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFiltro = precos.filter((preco) => preco.includes('R$'));

console.log(precosFiltro);

//modificando os itens de um array e fazendo uma nova array com map
const precosNumeros = precosFiltro.map((preco) => Number(preco.replace('R$ ', '')));

console.log(precosNumeros);