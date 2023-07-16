import { useEffect, useState } from "react";
import StudentCard from "../studentCard/StudentCard";
import SearchBar from "../searchBar/SearchBar";
import "./StudentList.scss";

export default function StudentList({ students }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    function handleSearch() {
      setSearchResults(
        students.filter(
          (student) =>
            student.firstName.toLowerCase().includes(search.toLowerCase()) ||
            student.lastName.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    handleSearch();
  }, [search]);

  console.log("<StudentList /> rendederd");
  return (
    <div className="studentList">
      <SearchBar search={search} setSearch={setSearch} />
      {search != ""
        ? searchResults.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))
        : students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
    </div>
  );
}
