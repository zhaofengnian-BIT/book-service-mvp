// ui.js

export function showMenu() {
  console.log(`
==============================
 Student Manager
==============================
1. Show all students
2. Add student
3. Delete student
4. Update student
5. Search students
6. Show class average score
0. Exit
`);
}

export function showStudent(student) {
  const { id, name, age, major, score } = student;

  console.log(
    `ID: ${id} | Name: ${name} | Age: ${age} | Major: ${major} | Score: ${score}`
  );
}

export function showStudents(students) {
  if (students.length === 0) {
    console.log("No students found.");
    return;
  }

  students.forEach(showStudent);
}