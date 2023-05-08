const nomePersonagem1 = prompt("Digite o nome o nome do personagem 1:");
const atk1 = Number(prompt("Digite o poder de ataque do seu personagem 1"));

const nomePersonagem2 = prompt("Digite o nome o nome do personagem 2:");
const life2 = Number(prompt("Digite a quantidade de pontos de vida do seu personagem 2"));
const def2 = Number(prompt("Digite o poder de defesa do personagem 2"));
const shield2 = Number(prompt("Se tiver escudo, digite o valor, senão considere e digite 0"));

const damage1 = atk1-def2
const damage2 = atk1-def2-shield2

const newlife = shield2 > damage1 ? life2 - damage2 : life2 - damage1;


if (atk1 > def2 && shield2 === 0) {
    alert ("O dano foi de: " + damage1);
}
else if (atk1 > def2 && shield2 !== 0) {
    alert ("O dano foi de: " + damage2);
}
else if (atk1 < def2 ) {
    alert ("O dano foi de: 0");
}


alert: ("é mais rápido que ;
