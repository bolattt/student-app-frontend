function getAverageGrade(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += Number(grades[i]);
  }
  return total / grades.length;
}

export { getAverageGrade };
