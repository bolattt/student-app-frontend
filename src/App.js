import { useEffect, useState } from "react";
import axios from "axios";

import StudentList from "./components/studentList/StudentList";
import "./App.scss";

function App() {
  const [students, setStudents] = useState([]);
  console.log("<App /> rendederd. Num of students: " + students.length);

  useEffect(() => {
    console.log("<App /> useEffect() fired");
    const API = process.env.REACT_APP_API;
    async function fetchData() {
      const response = await axios.get(`${API}/students`);
      const data = response.data.data;
      console.log("<App /> useEffect() fetched data");
      setStudents(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <StudentList students={students} />
    </div>
  );
}

export default App;
