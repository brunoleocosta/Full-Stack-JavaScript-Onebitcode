const primeiroNome = prompt ("Informe o primeiro nome:")
const sobrenome = prompt ("Informe o sobrenome:")
const campoDeEstudo = prompt ("Qual é o seu campo de estudo?")
const anoDeNascimento = prompt ("Qual o seu ano de nascimento?")

alert (
  "Recruta cadastrado com Sucesso!\n" +
  "\nNome completo: " + primeiroNome + " " + sobrenome +
  "\ncampo de estudo: " + campoDeEstudo +
  "\nIdade: " + (2023-anoDeNascimento)
)