function calculateAverageAge(persons) {
  if (!Array.isArray(persons)) {
    return;
  }

  if (persons.length === 0) {
    return;
  }

  const sumOfAges = persons.reduce((accumulator, person) => {
    if (typeof person.age !== "number" || !Number.isFinite(person.age)) {
      return;
    }
    return accumulator + person.age;
  }, 0);

  if (sumOfAges === 0 || persons.length === 0) {
    return;
  }

  const averageAge = Math.round(sumOfAges / persons.length);
  return averageAge;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);