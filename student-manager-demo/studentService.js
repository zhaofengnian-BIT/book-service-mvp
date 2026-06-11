// studentService.js

import { students, setStudents } from "./data.js";

export function getAllStudents() {
  return students.map(student => ({ ...student }));
}

export function addStudent(studentData) {
  const newId =
    students.length === 0
      ? 1
      : Math.max(...students.map(student => student.id)) + 1;

  const newStudent = {
    id: newId,
    ...studentData,
  };

  students.push(newStudent);

  return newStudent;
}

export function deleteStudent(id) {
  const studentExists = students.some(student => student.id === id);

  if (!studentExists) {
    return false;
  }

  const updatedStudents = students.filter(student => student.id !== id);
  setStudents(updatedStudents);

  return true;
}

export function updateStudent(id, newData) {
  const student = students.find(student => student.id === id);

  if (!student) {
    return null;
  }

  const updatedStudent = {
    ...student,
    ...newData,
    id: student.id,
  };

  const updatedStudents = students.map(student =>
    student.id === id ? updatedStudent : student
  );

  setStudents(updatedStudents);

  return updatedStudent;
}

export function searchStudents(keyword) {
  const lowerKeyword = keyword.toLowerCase();

  return students.filter(student => {
    return (
      student.name.toLowerCase().includes(lowerKeyword) ||
      student.major.toLowerCase().includes(lowerKeyword)
    );
  });
}

export function findStudentById(id) {
  return students.find(student => student.id === id);
}

export function getClassAverageScore() {
  if (students.length === 0) {
    return 0;
  }

  const total = students.reduce((sum, student) => sum + student.score, 0);

  return total / students.length;
}
