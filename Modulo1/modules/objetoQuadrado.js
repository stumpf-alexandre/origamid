//exportando 1 objeto com varias funções
function areaQuadrado(l) {
  return l * l;
}

function perimetroQuadrado(l) {
  return 4 * l;
}

const objetoQuadrado = {
  areaQuadrado,
  perimetroQuadrado
}
export default objetoQuadrado;