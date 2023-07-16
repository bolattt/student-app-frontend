import { useEffect, useState } from "react";
import axios from "axios";

import StudentList from "./components/studentList/StudentList";
import "./App.scss";
import useAxios from "./hooks/useAxios";

function App() {
  const { data: students, loading, error } = useAxios("/students");
  console.log("<App /> rendederd. Num of students: " + students.length);

  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {students && <StudentList students={students} />}
    </div>
  );
}

export default App;
