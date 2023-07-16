import React from "react";
import "./StudentCard.scss";
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
      <div className="studentCard__avatar">
        <img className="" src={pic} alt={firstName + " " + lastName} />
      </div>
      <div className="studentCard__info">
        <h1 className="studentCard__name">
          {firstName} {lastName}
        </h1>
        <p className="studentCard__email">Email: {email}</p>
        <p className="studentCard__company">Company: {company}</p>
        <p className="studentCard__skills">Skill: {skill}</p>
        <p className="studentCard__averageGrade">Average: {averageGrade}%</p>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          vitae tenetur. Facilis autem ratione dolorum assumenda iusto aliquam,
          impedit harum repellendus iure id ullam ab debitis natus unde
          molestiae ipsa. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Libero quo ipsam modi possimus reiciendis minus nobis suscipit,
          vitae vero ducimus quaerat nostrum repudiandae consequuntur error
          mollitia aut tenetur, incidunt eligendi.
        </p> */}
      </div>
    </div>
  );
}
