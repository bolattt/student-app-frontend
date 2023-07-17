import StudentList from "./components/studentList/StudentList";
import "./App.scss";
import useAxios from "./hooks/useAxios";

function App() {
  const { data: students, loading, error } = useAxios("/students");
  console.log(
    `<App /> rendederd. Loading=${loading} Error=${error} Num of students:  ${students.length}`
  );

  function renderContent() {
    if (loading) {
      return <h1>Loading...</h1>;
    } else if (error) {
      return <h1>Error: {error}</h1>;
    } else {
      return <StudentList students={students} />;
    }
  }

  return <div className="App">{renderContent()}</div>;
}

export default App;
