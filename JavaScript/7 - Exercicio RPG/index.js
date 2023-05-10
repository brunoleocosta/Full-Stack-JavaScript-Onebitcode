const atacker = prompt("Digite o nome do personagem 1:");
const atk = Number(prompt("Digite o poder de ataque do seu personagem 1"));

const defender = prompt("Digite o nome do personagem 2:");
let life = Number(prompt("Digite a quantidade de pontos de vida do seu personagem 2"));
const def = Number(prompt("Digite o poder de defesa do personagem 2"));
const shield = prompt("Ele possui escudo? (sim/não)");

let damage = 0;

if (atk > def && shield === "não") {
    damage = atk - def;
} else if (atk > def && shield === "sim") {
    damage = (atk - def) / 2;
    life -= damage;
}

alert(atacker + " causou " + damage + " pontos de dano em " + defender);
alert(
    atacker + "\nPoder de ataque " + atk + "\n\n" +
    defender + "\nPontos de vida " + life +
    "\nPoder de defesa " + def + "\nPossui escudo " + shield
);
