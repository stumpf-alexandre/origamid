import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";
import numeroAleatorio from "./numeroAleatorio.js";
import objetoQuadrado from "./objetoQuadrado.js";

console.log(`Área do quadrado de lado 5 cm: ${areaQuadrado(5)} cm²`);
console.log(`Perímetro do quadrado de lado 5 cm: ${perimetroQuadrado(5)} cm`);
console.log(`Número aleatório: ${numeroAleatorio()}`);
console.log(`Área do quadrado de lado 10 cm: ${objetoQuadrado.areaQuadrado(10)} cm²`);
console.log(`Perímetro do quadrado de lado 10 cm: ${objetoQuadrado.perimetroQuadrado(10)} cm`);