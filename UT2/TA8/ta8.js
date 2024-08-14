function calculateAge(person) {
  return person.yearOfDeath - person.yearOfBirth;
}

function findTheOldest(people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = calculateAge(oldest);
    const currentAge = calculateAge(currentPerson);
    return oldestAge < currentAge ? currentPerson : oldest;
  });
}

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  {
    name: "Jeremy",
    yearOfBirth: 1902,
    yearOfDeath: 1981,
  },
  {
    name: "Jane II",
    yearOfBirth: 1932,
    yearOfDeath: 1971,
  },
]

console.log(findTheOldest(people));