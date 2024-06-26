// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  let salary;
  switch(role) {
    case "ceo":
      salary ="Ceo: " + 2200;
      break;
    case "manager":
      salary = "Manager: " + 1800
      break;
    case "cto":
      salary ="CTO: " + 1800;
      break;
    case "developer":
      salary = "Developer: " + 1500;
      break;
    default:
      salary = "Default: " + 1000; 

  }
  return salary;
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);