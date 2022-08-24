const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  return data.employees.find((fullName) =>
    employeeName === fullName.firstName || employeeName === fullName.lastName);
}

// Para que a função consiga achar os funcionários, apliquei o find para acessar as propriedades 'firtsName' e 'lastName' do objeto 'employees' e adicionei que se a função vier sem parâmetros (undefined), retornará um objeto vazio.

module.exports = getEmployeeByName;
