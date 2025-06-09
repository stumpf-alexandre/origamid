const grupoA = 100;
const grupoB = 200;

//operador ternario
if (grupoA > grupoB) {
    console.log("Grupo A ganhou");
} else {
    console.log("Grupo B ganhou");
}

//expressões
const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu';
console.log(vencedor);

//expresão com true ou false
const active = true;
const button = active && 'Botão está ativo';
console.log(button);
const active2 = false;
const button2 = active2 && 'Botão está ativo';
console.log(button2);