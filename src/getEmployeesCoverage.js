const { species, employees } = require('../data/zoo_data');

// 1. Criei uma função para agregar as propriedades que vou construir no meu objeto-resposta da função principal, com três parâmetros que serão renomeados de acordo com o valor passado nas próximas funções.
function obj(employee, specie, locations) {
  const objCoverage = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: specie,
    locations,
  };
  return objCoverage;
}
// 2. Criei a segunda função para encontrar o valor do parâmetro para quando a função principal chamar apenas um funcionário.
function oneEmployee(employee) {
// 3. Salvei em uma variável o id do funcionário (com filter e includes, acessando o objeto 'species' e a propriedade 'responsibleFor' do subobjeto 'employees')
  const employeeResp = species.filter((element) => employee.responsibleFor.includes(element.id));
  // 4. Salvei em outras duas variáveis o nome e o localização das espécieis de animais gerenciadas pelo funcionário, utilizando o map e acessando as propriedades 'name' e 'location'
  const animalName = employeeResp.map((the) => the.name);
  const animalLoc = employeeResp.map((the) => the.location);
  // 5. Retornei o obj-resposta, substituindo os parâmetros pelos correspondentes nessa função.
  return obj(employee, animalName, animalLoc);
}

// 6. Criei a terceira função para encontrar todos os funcionários (que é o parâmetro resposta da função principal para quando seu valor for 0)
function everyEmployee() {
  const mapEmployee = employees.map((elem) => {
    const employeeResp = species.filter((element) => elem.responsibleFor.includes(element.id));
    const animalName = employeeResp.map((the) => the.name);
    const animalLoc = employeeResp.map((the) => the.location);
    // 7. O retorno também vai para o obj-resposta, com a diferença que o primeiro parâmetro corrresponde agora a todos os funcionários que foram mapeados pelo map, o segundo e terceiro são correspondentes aos funcionṕarios do primeiro parâmetro.
    return obj(elem, animalName, animalLoc);
  });
  // 8. A função, por fim, retorna o valor da arrow function utilizada para mapear todos os funcionários, nomes de animais e localização.
  return mapEmployee;
}

// 9. A função principal consta parâmetro inicial = 0. Dentro da função, há uma variável que contém outras possibilidades de parâmetro, que seriam 'name' ou 'id' em um objeto.
function getEmployeesCoverage(param = 0) {
  const { name, id } = param;

  // 10. Se a condição de parâmentro 0 (ou seja, sem argumentos), retorna a array com as informações de todos os funcionários (contidos na função everyEmployee())
  if (param === 0) {
    return everyEmployee();
  }
  // 11. Se o valor do parâmetro for 'name' ou 'id', retornará as informações correspondentes às propriedades 'firstName' ou 'lastName' ou 'id' do subobjeto 'employees'.
  const workers = employees
    .find((elem) => elem.firstName === name || elem.lastName === name || elem.id === id);

  // 12. Se o parâmetro for indefinido, diferente de todas as outras opções já mencionadas, retornará uma resposta erro (através do throw new Error)informando a string 'Informações inválidas'
  if (workers === undefined) throw new Error('Informações inválidas');

  // 13. Se o parâmetro for algum dos analisados dentro da const workers na observação 11, o retorno será a função oneEmployee(workers);

  return oneEmployee(workers);
}

module.exports = getEmployeesCoverage;
