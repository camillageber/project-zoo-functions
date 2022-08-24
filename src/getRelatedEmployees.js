const data = require('../data/zoo_data');

function isManager(id) {
  // fonte:https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-foreach-find-some-every-sort/250fa96c-fc2c-408b-b8a1-3b3c97274f20/conteudos/34b89701-bc2e-40a3-9eff-c9305f580abb/arraysome-e-arrayevery/f3070468-9723-4cec-9878-b2ce2b246eaa?use_case=side_bar

  // Primeiramente, para buscar se o funcionário é ou não gerente, listei os ids do objeto através do some (que retorna true ou false) e includes, acessando a propriedade 'managers', para retornar o meu parâmetro da função.
  const managerIs = data.employees.some((ifManager) => ifManager.managers.includes(id));
  return managerIs;
}

function getRelatedEmployees(managerId) {
  // Caso a função isManager com o parâmetro de um id errado (ou seja, que não existe como valor da chave 'managers') for chamado, o erro throw new Error retornará uma string explicando o mesmo.
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  // Em qualquer outro caso, utilizei o filter para filtrar os ids inseridos como parâmetro da função e com o map, criar um array com os valores das chaves 'firstName' e 'lastName' do objeto 'employees', referentes aos colaboradores gerenciados por algum colaborador gerente.
  const theManager = data.employees.filter((idManager) => idManager.managers.includes(managerId));
  return theManager.map((idEmployee) => `${idEmployee.firstName} ${idEmployee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
