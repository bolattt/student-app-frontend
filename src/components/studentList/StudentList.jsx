import React from "react";
import StudentCard from "../studentCard/StudentCard";
import SearchBar from "../searchBar/SearchBar";
import "./StudentList.scss";

export default function StudentList({ students }) {
  console.log("<StudentList /> rendederd");
  return (
    <div className="studentList">
      <SearchBar />
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
