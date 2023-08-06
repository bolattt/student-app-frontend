import { useEffect, useState } from "react";
import StudentCard from "../studentCard/StudentCard";
import SearchBar from "../searchBar/SearchBar";
import SearchTagBar from "../searchTagBar/SearchTagBar";
import "./StudentList.scss";

export default function StudentList({ students }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchTag, setSearchTag] = useState("");

  let dataToDisplay = students;

  if (searchInput) {
    dataToDisplay = students.filter(
      (student) =>
        student.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  if (searchTag) {
    dataToDisplay = students.filter((student) => {
      return student.tags.includes(searchTag);
    });
  }

  function renderContent() {
    if (dataToDisplay.length === 0) {
      return `<h1>No students found for ${searchInput}</h1>`;
    } else {
      return dataToDisplay.map((student) => (
        <StudentCard key={student.id} student={student} />
      ));
    }
  }

  console.log("<StudentList /> rendered");
  return (
    <div className="studentList">
      <SearchBar search={searchInput} setSearch={setSearchInput} />

      <SearchTagBar searchTag={searchTag} setSearchTag={setSearchTag} />

      {renderContent()}
    </div>
  );
}
