const credits = require("./credits.js");
const student = require("./student.js");
let totalCreditPoints = 0;
let totalGradePoints = 0;

for (const course of student.courses) {
  const [courseCode] = course.course.split("-");
  const creditPoint = credits.find(
    (credit) => credit.course_code === parseInt(courseCode)
  ).credit;
  const gradePoints = { S: 10, A: 9, B: 8, C: 7, D: 6, E: 5, F: 0 };
  const gradePoint = gradePoints[course.grade];
  totalCreditPoints += creditPoint;
  totalGradePoints += creditPoint * gradePoint;
}

const sgpa = totalGradePoints / totalCreditPoints;

console.log(sgpa);
