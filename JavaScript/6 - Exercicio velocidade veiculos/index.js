// solicita o nome e a velocidade do primeiro veículo
const nomeVeiculo1 = prompt("Digite o nome do primeiro veículo:");
const velocidadeVeiculo1 = Number(prompt("Digite a velocidade do primeiro veículo em km/h:"));

// solicita o nome e a velocidade do segundo veículo
const nomeVeiculo2 = prompt("Digite o nome do segundo veículo:");
const velocidadeVeiculo2 = Number(prompt("Digite a velocidade do segundo veículo em km/h:"));

// compara as velocidades dos dois veículos
if (velocidadeVeiculo1 > velocidadeVeiculo2) {
  alert(`${nomeVeiculo1} é mais rápido que ${nomeVeiculo2}!`);
} else if (velocidadeVeiculo2 > velocidadeVeiculo1) {
  alert(`${nomeVeiculo2} é mais rápido que ${nomeVeiculo1}!`);
} else {
  alert(`Os dois veículos têm a mesma velocidade!`);
}