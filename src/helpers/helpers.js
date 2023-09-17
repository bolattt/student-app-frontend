function getAverageGrade(grades) {
  let total = 0;
  grades.map((grade) => {
    total += Number(grade.score);
  });

  return total / grades.length;
}

export { getAverageGrade };
