// app.js

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import {
  getAllStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  searchStudents,
  findStudentById,
  getClassAverageScore,
} from "./studentService.js";

import { showMenu, showStudents, showStudent } from "./ui.js";

const rl = readline.createInterface({ input, output });

async function ask(question) {
  const answer = await rl.question(question);
  return answer.trim();
}

async function askNumber(question) {
  const answer = await ask(question);
  return Number(answer);
}

async function handleShowAllStudents() {
  const students = getAllStudents();
  showStudents(students);
}

async function handleAddStudent() {
  const name = await ask("Name: ");
  const age = await askNumber("Age: ");
  const major = await ask("Major: ");
  const score = await askNumber("Score: ");

  const newStudent = addStudent({
    name,
    age,
    major,
    score,
  });

  console.log("Student added successfully:");
  showStudent(newStudent);
}

async function handleDeleteStudent() {
  const id = await askNumber("Enter student ID to delete: ");

  const success = deleteStudent(id);

  if (success) {
    console.log("Student deleted successfully.");
  } else {
    console.log("Student not found.");
  }
}

async function handleUpdateStudent() {
  const id = await askNumber("Enter student ID to update: ");

  const student = findStudentById(id);

  if (!student) {
    console.log("Student not found.");
    return;
  }

  console.log("Current student information:");
  showStudent(student);

  const name = await ask("New name, press Enter to keep old value: ");
  const ageInput = await ask("New age, press Enter to keep old value: ");
  const major = await ask("New major, press Enter to keep old value: ");
  const scoreInput = await ask("New score, press Enter to keep old value: ");

  const newData = {
    name: name || student.name,
    age: ageInput ? Number(ageInput) : student.age,
    major: major || student.major,
    score: scoreInput ? Number(scoreInput) : student.score,
  };

  const updatedStudent = updateStudent(id, newData);

  console.log("Student updated successfully:");
  showStudent(updatedStudent);
}

async function handleSearchStudents() {
  const keyword = await ask("Enter name or major keyword: ");

  const results = searchStudents(keyword);

  console.log("Search results:");
  showStudents(results);
}

async function handleAverageScore() {
  const average = getClassAverageScore();

  console.log(`Class average score: ${average.toFixed(2)}`);
}

async function main() {
  let running = true;

  while (running) {
    showMenu();

    const choice = await ask("Choose an option: ");

    switch (choice) {
      case "1":
        await handleShowAllStudents();
        break;

      case "2":
        await handleAddStudent();
        break;

      case "3":
        await handleDeleteStudent();
        break;

      case "4":
        await handleUpdateStudent();
        break;

      case "5":
        await handleSearchStudents();
        break;

      case "6":
        await handleAverageScore();
        break;

      case "0":
        running = false;
        console.log("Goodbye!");
        break;

      default:
        console.log("Invalid choice. Please try again.");
    }
  }

  rl.close();
}

main();