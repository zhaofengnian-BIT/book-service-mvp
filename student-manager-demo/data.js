// data.js

export let students = [
  {
    id: 1,
    name: "Alice",
    age: 20,
    major: "Computer Science",
    score: 88,
  },
  {
    id: 2,
    name: "Bob",
    age: 21,
    major: "Software Engineering",
    score: 76,
  },
  {
    id: 3,
    name: "Cindy",
    age: 19,
    major: "AI",
    score: 92,
  },
];

export function setStudents(newStudents) {
  students = newStudents;
}