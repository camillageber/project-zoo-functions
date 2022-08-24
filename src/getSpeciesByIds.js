const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // fonte: https://stackoverflow.com/questions/68287683/javascript-filtering-includes

  //  Para buscar a lista de espécies por id, retornei a função endereçando o caminho do objeto que contém os animais ('species') e utilizei o filter + includes para filtrar e encontrar somente a propriedade 'id' do objeto. Utilizei o Parâmetro Rest para que não dê erros nos testes, independente da quantidade de parâmetros que a função venha a receber.
  return data.species.filter((idSpecies) => ids.includes(idSpecies.id));
}

module.exports = getSpeciesByIds;
