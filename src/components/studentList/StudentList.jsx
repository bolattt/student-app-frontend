import React from "react";
import StudentCard from "../studentCard/StudentCard";

export default function StudentList({ students }) {
  console.log("<StudentList /> rendederd");
  return (
    <div className="studentList">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}