import { useState } from "react";
import plus from "../../assets/plus-solid.svg";
import minus from "../../assets/minus-solid.svg";
import "./StudentCard.scss";

export default function StudentCard({ student }) {
  console.log("<StudentCard /> rendederd");
  const { company, email, firstName, lastName, grades, pic, skill } = student;
  const [showGrades, setShowGrades] = useState(false);
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
        <div className="studentCard__nameWrapper">
          <h1 className="studentCard__name">
            {firstName} {lastName}
          </h1>
          <button
            className="studentCard__toggle"
            onClick={() => setShowGrades(!showGrades)}
          >
            <img src={showGrades ? minus : plus} alt="toggle" />
          </button>
        </div>

        <p className="studentCard__email">Email: {email}</p>
        <p className="studentCard__company">Company: {company}</p>
        <p className="studentCard__skills">Skill: {skill}</p>
        <p className="studentCard__averageGrade">Average: {averageGrade}%</p>
        <div className="studentCard__grades">
          <br />
          {showGrades &&
            grades.map((grade, index) => (
              <p key={index} className="studentCard__grade">
                Test {index + 1}: &nbsp; &nbsp; &nbsp; {grade}%
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
