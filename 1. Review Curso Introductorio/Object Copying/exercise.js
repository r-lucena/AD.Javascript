const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
// Se modifican las dos constantes porque las dos constantes estan guardadas en el mismo espacio,
// por tanto modificando person2.firstname al hacer console.log veremos que tanto person1 como person2 comparten la misma propiedad firstName
person2.firstName = "Simon";

console.log(person1);
console.log(person2);