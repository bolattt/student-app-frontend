import { useEffect, useState } from "react";
import StudentCard from "../studentCard/StudentCard";
import SearchBar from "../searchBar/SearchBar";
import "./StudentList.scss";

export default function StudentList({ students }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log("useEffect() in StudentList fired");

    const filteredStudents = students.filter(
      (student) =>
        student.firstName.toLowerCase().includes(search.toLowerCase()) ||
        student.lastName.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredStudents);
  }, [search, students]);

  console.log("<StudentList /> rendered");
  return (
    <div className="studentList">
      <SearchBar search={search} setSearch={setSearch} />
      {searchResults.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
