const medida = prompt("Insira a temperatura:");

const unidade = prompt("Para qual unidade de medida você deseja converter?" +
  "\n1- Celsius ( °C)" +
  "\n2- Fahrenheit( °F)"
);

switch (unidade) {
  case "1":
    alert("A temperatura é: " + ((medida - 32) / 1.8) + " °C");
    break;
  case "2":
    alert("A temperatura é: " + ((medida * 1.8) + 32) + " °F");
    break;
  default:
    alert("Opção inválida.");
}