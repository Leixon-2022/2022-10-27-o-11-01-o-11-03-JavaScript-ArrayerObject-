const arrayOfFruits = ["Äpple", "Banan", "Päron", "Äpple"]

console.log('1. arrOfFruits: ', arrayOfFruits)

// ---------
// Lägg till värde i arrayOfFruits
// Noga med vad ni puttar in
arrayOfFruits.push("Granatäpple")

console.log('2. arrOfFruits: ', arrayOfFruits)


// --------
arrayOfFruits.forEach((value, index) => {
  console.log('3. ', value, " ", " currentIndex: ", index)
})

// -------
console.log('4. arrOfFruits: ', arrayOfFruits)
// --------
// Lade till en Kiwi
arrayOfFruits.push("Kiwi")
console.log('5. arrOfFruits: ', arrayOfFruits)
//

// Filter

const filteredArrayOfFruits = arrayOfFruits.filter(fruit => fruit == "Äpple")
console.log('6. filteredArrayOfFruits: ', filteredArrayOfFruits)
console.log('6. arrOfFruits: ', arrayOfFruits)
// filter returnar en tom array, alltså [] om inget värde hittas i filtreringen

// Find
const findFruit = arrayOfFruits.find(fruit => fruit == "Granatäpple")
console.log('7. Found fruit: ', findFruit)
if (findFruit) {
  console.log("7.1 Kunde hitta ett Granatäpple")
} else {
  console.log("7.1 Kunde inte hitta Granatäpple")
}


const arrayOfFruitObjects = [
  {
    kind: "Äpple",
    ageDays: 3,
  },
  {
    kind: "Banan",
    ageDays: 2,
  },
  {
    kind: "Päron",
    ageDays: 1,
  },
  {
    kind: "Äpple",
    ageDays: 5,
  },
  {
    kind: "Granatäpple",
    ageDays: 100,
  }
]

console.log("arrayOfFruitObjects", arrayOfFruitObjects)


const filteredArrayOfFruitObjects = arrayOfFruitObjects.filter(fruits => fruits.ageDays <= 4)
console.log("filteredArrayOfFruitObjects", filteredArrayOfFruitObjects)

// function checkFruitAge(age: any, kindOfFruit: any): boolean
function checkFruitAge(age) {
  return age >= 4;
}

const filteredArrayOfFruitObjectsWithSpecificFunction = arrayOfFruitObjects.filter(fruits => checkFruitAge(fruits.ageDays))
console.log("filteredArrayOfFruitObjectsWithSpecificFunction", filteredArrayOfFruitObjectsWithSpecificFunction)


// ----
// Ta ut allt som inte har kind:en Äpple
const filterOnlyNotApples = arrayOfFruitObjects.filter(fruits => fruits.kind !== "Äpple")
console.log('filterOnlyNotApples: ', filterOnlyNotApples)





















const arrayOfPersons = [
  {
    firstName: "Sulejman",
    role: "Student",
  },
  {
    firstName: "Jonas",
    role: "Student",
  },
  {
    firstName: "Anja",
    role: "Student",
  },
  {
    firstName: "Patric",
    role: "Student",
  },
  {
    firstName: "Michela",
    role: "Student",
  },
  {
    firstName: "Simon",
    role: "Student",
  },
  {
    firstName: "Joacim",
    role: "Student",
  },
  {
    firstName: "Jennifer",
    role: "Student",
  },
  {
    firstName: "Mirsada",
    role: "Student",
  },
  {
    firstName: "Moneer",
    role: "Student",
  },
  {
    firstName: "Olof",
    role: "Student",
  },
  {
    firstName: "Erik",
    role: "Student",
  },
  {
    firstName: "Joakim",
    role: "Teacher",
  },
]
