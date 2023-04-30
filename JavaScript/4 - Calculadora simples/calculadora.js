const n1 = prompt("Informe o primeiro número:");
const n2 = prompt("Informe o segundo número:");

const parsedN1 = parseFloat(n1);
const parsedN2 = parseFloat(n2);

const soma = parsedN1 + parsedN2;
const subtracao = parsedN1 - parsedN2;
const multiplicacao = parsedN1 * parsedN2;
const divisao = parsedN1 / parsedN2;

alert(
  "Resultados:\n" + 
  "\nsoma: " + soma + 
  "\nsubtracao: " + subtracao + 
  "\nmultiplicacao: " + multiplicacao +
  "\ndivisao: " + divisao
);