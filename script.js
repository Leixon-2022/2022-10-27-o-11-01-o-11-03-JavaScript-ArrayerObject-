// Array deklareras genom []
// Array kan bestå av flera värden, flera olika typer av värden
// string/sträng detta är en text""
// number/nummer  0 100 200 300 230 (int) 0.2 0.5 1.5 (double, float)
// boolean/sant-falskt - true false
// objekt något sammansatt t.ex. en hund som har egenskaper ålder, kön, mankhöjd

//const anArrayOfString = ["Anja", "Eric", "Olof", "Michaela"];
// Anja = 0 i index
// Eric = 1 i index
// Olof = 2 i index
// Michaela = 3 i index
// 4 total 0 till 3 om vi gör en loop 0, 1, 2,3


const anArrayOfString = ["Anja", "Eric", "Olof", "Michaela"];

console.log('ArrayOfStrings: ', anArrayOfString);

for (let index = 0; index < anArrayOfString.length; index++ /* ++ index = index + 1 */) {
  const currentName = anArrayOfString[index];
  console.log('Current name: ', currentName)
}
console.log('');
console.log('');
console.log('');
console.log('');

const anArrayOfNumbers = [100, 200, 300, 400, 500, 600, 700];
console.log('anArrayOfNumbers Length: ', anArrayOfNumbers.length);

console.log('');
console.log('');
console.log('');
console.log('');

for (let index = 0; index < anArrayOfNumbers.length; index++) {
  const currentNumber = anArrayOfNumbers[index];
  console.log('Current number: ', currentNumber);
  // vi ska gångra varje variabel med 10
  console.log('Current number times/gånger 10: ', currentNumber * 10);
}

console.log('');
console.log('');
console.log('');
console.log('');

const anArrayOfBooleans = [true, false, true, true, false, true]
console.log('anArrayOfBooleans: ', anArrayOfBooleans)

for (let index = 0; index < anArrayOfBooleans.length; index++) {
  const currentBoolean = anArrayOfBooleans[index];
  console.log('Current boolean: ', currentBoolean);
  if(currentBoolean){
    console.log('True: ', "Du hade rätt");
  } else {
    console.log('Fel: ', "Du hade fel")
  }
}

console.log('');
console.log('');
console.log('');
console.log('');

const arrayOfPeople = [
  // 0
  {
    firstName: "Anja",
    lastName: "Edman",
  },
  // 1
  {
    firstName: "Eric",
    lastName: "Westman",
    age: 150,
  },
  // 2
  {
    firstName: "Olof",
    lastName: "92",
  },
  // 3
  {
    firstName: "Michaela",
    lastName: "Malis",
    age: 20,
  },
]

console.log('Array Of People: ', arrayOfPeople)
console.log('Array Of People Length: ', arrayOfPeople.length)

for (let index = 0; index < arrayOfPeople.length; index++) {
  const currentPerson = arrayOfPeople[index];
  console.log('Current person: ', currentPerson)
  console.log('Firstname: ', currentPerson.firstName)
  console.log('Lastname: ', currentPerson.lastName)

  // === == ÄR
  // !== INTE ÄR
  if(currentPerson.age){
    console.log('Age: ', currentPerson.age)
  } else {
    console.log('This person has no age!')
  }

  console.log('')
}