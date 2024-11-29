//1 tapsyrma
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const cubedArray = array.map(num => num ** 3);
// for (const num of cubedArray) {
//   if (num % 2 !== 0) { // Тек тақ сандарды тексеру
//     console.log(num);
//   }
// }



//2 tapsyrma
// const studentCount = parseInt(prompt("Студенттердің санын енгізіңіз:"), 10);
// const studentGrades = [];

// for (let i = 0; i < studentCount; i++) {
//   const grades = prompt(`Студент ${i + 1} бағаларын енгізіңіз (үтір арқылы):`);
//   const gradesArray = grades.split(',').map(num => parseFloat(num));
//   studentGrades.push(...gradesArray);
// }
// const totalGrades = studentGrades.reduce((sum, grade) => sum + grade, 0);
// const averageGrade = totalGrades / studentCount;

// console.log(`Ортақ баға: ${averageGrade.toFixed(2)}`);
// const highGrades = studentGrades.filter(grade => grade > 85);

// console.log("85-тен жоғары бағалар:", highGrades);
