import { useState } from "react";
import StudentCard from "../studentCard/StudentCard";
import SearchBar from "../searchBar/SearchBar";
import SearchTagBar from "../searchTagBar/SearchTagBar";
import "./StudentList.scss";

export default function StudentList({ students }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [expanded, setExpanded] = useState([]);

  let dataToDisplay = students;

  if (searchInput) {
    dataToDisplay = students.filter(
      (student) =>
        student.first_name.toLowerCase().includes(searchInput.toLowerCase()) ||
        student.last_name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  if (searchTag) {
    dataToDisplay = students.filter((student) => {
      return student.tags.includes(searchTag);
    });
  }

  function handleExpandAll() {
    setExpanded(students.map((student) => student.id));
  }

  function handleCollapseAll() {
    setExpanded([]);
  }

  function handleToggleExpanded(id) {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter((studentId) => studentId !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  }

  function renderContent() {
    let contentClassname = "studentList__content";

    if (dataToDisplay.length === 0) {
      contentClassname += " studentList__content--empty";
      return (
        <div className={contentClassname}>
          <h1>No results for {searchInput}</h1>
        </div>
      );
    } else {
      return (
        <div className={contentClassname}>
          {dataToDisplay.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              expanded={expanded.includes(student.id)}
              onClick={() => handleToggleExpanded(student.id)}
            />
          ))}
        </div>
      );
    }
  }

  console.log("<StudentList /> rendered");
  return (
    <div className="studentList">
      <div className="studentList__controls">
        <SearchBar search={searchInput} setSearch={setSearchInput} />
        <button onClick={handleExpandAll}>Expand All</button>
        <button onClick={handleCollapseAll}>Collapse All</button>
      </div>

      <SearchTagBar searchTag={searchTag} setSearchTag={setSearchTag} />
      {renderContent()}
    </div>
  );
}
