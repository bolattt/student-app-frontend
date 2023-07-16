import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import StudentList from "./components/studentList/StudentList";

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
      <h1>Student Dashboard</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;
