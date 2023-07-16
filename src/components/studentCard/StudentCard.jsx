import React from "react";

export default function StudentCard({ student }) {
  console.log("<StudentCard /> rendederd");
  const { city, company, email, firstName, lastName, grades, pic, skill } =
    student;

  function getAverageGrade(grades) {
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
      total += Number(grades[i]);
    }
    return total / grades.length;
  }
  const averageGrade = getAverageGrade(grades);

  return (
    <div className="studentCard">
      <img
        className="studentCard__studentImage"
        src={pic}
        alt={firstName + " " + lastName}
      />
      <h1 className="studentCard__studentName">
        {firstName} {lastName}
      </h1>
      <p className="studentCard__studentEmail">Email: {email}</p>
      <p className="studentCard__studentCompany">Company: {company}</p>
      <p className="studentCard__skills">Skill: {skill}</p>
      <p className="studentCard__averageGrade">
        Average Grade: {averageGrade}%
      </p>
    </div>
  );
}
