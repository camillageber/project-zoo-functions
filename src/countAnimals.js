const data = require('../data/zoo_data');

function countAnimals(animal) {
  const count = {};
  if (animal === undefined) {
    data.species.forEach((objAn) => { count[objAn.name] = objAn.residents.length; });
  } else if (animal.sex) {
    return data.species.find((objSex) =>
      objSex.name === animal.specie).residents
      .filter((gender) => gender.sex === animal.sex).length;
  } else if (animal.specie) {
    return data.species.find((quantSpecie) => quantSpecie.name === animal.specie).residents.length;
  }
  return count;
}

// Dado um objeto inicialmente vazio ({}), se o parâmetro for indefinido ou não houver parâmetros, utilizei o forEach para encontrar, dentro do objeto 'species' a propriedade 'name' (que é o nome do animal de uma determinada espécie), transformando-a em chave e a quantidade total dos animais dessa espécie foi transformada em valor de um novo objeto, acessando a propriedade 'residents'.length.
// Após isso, foi determinado que se o parâmetro passado for um objeto com o nome da espécie e o sexo do animal, retornará um objeto com a chave 'specie' (nome do animal) e a chave 'sex' (sexo do animal). Utilizei um find para encontrar e igualar a propriedade 'name' (do objeto 'species') com a chave correspondente 'specie' e, logo após usei o filter para filtrar, dentro da propriedade de objetos 'residents' a propriedade 'sex', e retornar sua quantidade de acordo com o sexo (usando o .length).
// Por fim, caso o parâmetro passado seja apenas a espécie do animal, utilizei o find para encontrar a propriedade 'name', correspondendo-a com a propriedade-parâmetro criada 'specie' e após isso, acessei a propriedade de objetos 'residents' para retornar a quantidade de animais da determinada espécie do parâmetro.
// Os resultados, de acordo com o parâmetro passado para a função, retornará dentro do objeto count.
module.exports = countAnimals;
