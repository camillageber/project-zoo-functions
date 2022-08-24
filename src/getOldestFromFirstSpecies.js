const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // 1. acessei o objeto 'employees' e utilizei o find para encontrar o id dos funcionários (propriedade 'id') e por quais espécies são responsáveis (propriedade 'responsibleFor')
  const idEmployee = data.employees.find((e) => e.id === id).responsibleFor;
  // 2. Acessei o objeto 'species' e usei o find para identificar o id das espécies + integrá-las com o id dos funcionários salvos na variável anterior, a partir da primeira posição (0)
  const findAnimal = data.species.find((firstAnm) => firstAnm.id === idEmployee[0]);
  // 3. Acessei a proriedade 'residents', junto com os dados salvos na variável anterior e utilizei o reduce para calcular e trazer a idade do animal mais velho. O acumulador começa em 0 anos.
  const oldestAge = findAnimal.residents.reduce((acumulator, current) => (
    acumulator > current.age ? acumulator : current.age), 0);
  // 4. Utilizei outra variável para salvar a idade do animal mais velho da primeira espécie gerenciado pelo id do funcionário (que será utilizado como parâmetro da função), acessando a propriedade 'residents' e usando o find.
  const theOldest = findAnimal.residents.find((num) => num.age === oldestAge);
  // 5. Retorno um array com os dados/valores referentes a esse animal (que estão na propriedade 'residents', salvos na variável anterior, nome, sexo e idade), acessando-os através do Object.values)
  return Object.values(theOldest);
}

// fonte 1: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-reduce/11a217d9-4e2a-4102-8d89-7c4460daa739/conteudos/b6860218-4e16-485f-9a3f-e3ca06f1a732/arrayreduce/1c71c18e-6a81-403c-9d36-86712bf238cd?use_case=side_bar
// fonte 2: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values

module.exports = getOldestFromFirstSpecies;
