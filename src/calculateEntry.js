const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // 1. Criei uma variável para conter o valor + a quantidade da idade de cada visitante passado como parâmetro. Para isso, utilizei o filter e informei na chave 'age' as idades de cada um, somando a quantidade com .length
  const child = entrants.filter((visitor) => visitor.age < 18).length;
  const adult = entrants.filter((visitor) => visitor.age >= 18 && visitor.age < 50).length;
  const senior = entrants.filter((visitor) => visitor.age >= 50).length;
  // 2. Retornei um objeto com as quantidades de visitantes obtidos em cada classificação etária (salvos nas variáveis anteriores)
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // 1. Informei a condição de que, se o parâmetro da função vier vazio ou sem um argumento, retornará 0
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  // 2. Para que a função retorne o preço total a ser cobrado pelo array de visitantes, salvei a função que conta a entrada de visitantes feita no passo acima dentro de uma variável.
  const visitorsAge = countEntrants(entrants);
  // 3. Após isso, para calcular o total do preço das entradas, criei uma variável que realiza o cálculo da contagem de visitantes por faixa etária, multiplica esse valor pelo preço pré estabelecido no objeto 'prices' (de acordo com a propriedades child, adult e senior) e depois realiza a soma total dessas entradas.
  const total = (visitorsAge.child * prices.child) + (visitorsAge.adult * prices.adult)
  + (visitorsAge.senior * prices.senior);
  // 4. Retorno o total valor das entradas, calculado na variável anterior.
  return total;
}

module.exports = { calculateEntry, countEntrants };
