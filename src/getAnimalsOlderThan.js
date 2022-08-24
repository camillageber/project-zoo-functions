const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // fonte: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-foreach-find-some-every-sort/250fa96c-fc2c-408b-b8a1-3b3c97274f20/conteudos/34b89701-bc2e-40a3-9eff-c9305f580abb/arrayfind/b2a130e2-fb3d-48a4-a5bf-f89b7735336f?use_case=side_bar

  // 1. Defini uma variável para conter a forma de achar o nome do animal que será buscado pela função, usando o find e meu parâmetro 'animal'. Depois verifico essa informação com o includes, acessando o chave 'name' que está dentro do objeto 'species'.
  const findAge = data.species.find((specieName) => animal.includes(specieName.name));

  // 2. Agora eu retorno o resultado pesquisando as idades de todos os animais dentro da minha propriedade 'residents' usando o every, perguntando se minha chave correspondente 'age' é maior ou igual ao meu parâmetro 'age'.
  return findAge.residents.every((animalAge) => animalAge.age >= age);
}

module.exports = getAnimalsOlderThan;
