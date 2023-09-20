import { useState } from "react";
import plus from "../../assets/plus-solid.svg";
import minus from "../../assets/minus-solid.svg";
import { getAverageGrade } from "../../helpers/helpers";
import "./StudentCard.scss";

export default function StudentCard({ student, expanded, onClick }) {
  console.log("<StudentCard /> rendederd");
  const { company, email, first_name, last_name, grades, pic, skill } = student;
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const averageGrade = getAverageGrade(grades);

  function handleTagSubmit(event) {
    event.preventDefault();
    setTags([...tags, tag]);
    setTag("");
  }

  return (
    <div className="studentCard">
      <div className="studentCard__avatar">
        <img className="" src={pic} alt={first_name + " " + last_name} />
      </div>

      <div className="studentCard__info">
        <div className="studentCard__nameWrapper">
          <h1 className="studentCard__name">
            {first_name} {last_name}
          </h1>
          <button className="studentCard__toggle" onClick={onClick}>
            <img src={expanded ? minus : plus} alt="toggle" />
          </button>
        </div>

        <p className="studentCard__email">Email: {email}</p>
        <p className="studentCard__company">Company: {company}</p>
        <p className="studentCard__skills">Skill: {skill}</p>
        <p className="studentCard__averageGrade">Average: {averageGrade}%</p>

        <div className="studentCard__grades">
          <br />
          {expanded &&
            grades.map((grade, index) => (
              <p key={index} className="studentCard__grade">
                Test {index + 1}: &nbsp; &nbsp; &nbsp; {grade.score}%
              </p>
            ))}
        </div>

        <div className="studentCard__tags">
          {tags.map((tag, index) => {
            return (
              <span key={index} className="studentCard__tag">
                {tag}
              </span>
            );
          })}
        </div>

        <form onSubmit={handleTagSubmit}>
          <input
            type="text"
            className="studentCard__addTag"
            placeholder="Add a tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
