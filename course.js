// Sulejman L
// Jonas B
// Anja E
// Patric F
// Michels M
// Simon N
// Joacim F
// Mirsada K
// Jennifer S
// Moneer Q
// oloof 92
// Erik W
// Joakim E


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



// Nytt objekt som är en kurs 1
const course1 = {
  date: "2022-11-01",
  attendees: arrayOfPersons
}

// Nytt objekt som är kurs 2
const course2 = {
  date: "2022-11-02",
  attendees: arrayOfPersons
}

const allCourses = [
  course1, course2
]

console.log('All courses:: ', allCourses)


let allCoursesTotal = 0;

// Loop allCourses-array
for (let index = 0; index < allCourses.length; index++) {
  let totalAmount = 0;
  const course = allCourses[index];
  console.log('')
  console.log('')
  console.log('course::', course)
  console.log('course:: date::', course.date);
  // Vi ska här loopa igenom course.attendes som är en array av objekt
  // Vi ska sen ha ut varje firstName
  for (let index = 0; index < course.attendees.length; index++) {
    const attendee = course.attendees[index];
    console.log('course:: attendee:: firstName:: ', attendee.firstName)
    totalAmount = totalAmount + 1
    allCoursesTotal = allCoursesTotal + 1
  }
  console.log('course:totalAttendees:: ', totalAmount)

}
console.log('')
console.log('')
console.log('total attendees for every course:: ', allCoursesTotal)
