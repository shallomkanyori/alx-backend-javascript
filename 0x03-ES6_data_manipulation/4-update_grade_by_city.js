export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((s) => s.location === city).map((s) => {
    const newGrade = newGrades.find((g) => g.studentId === s.id);
    return {
      ...s,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
