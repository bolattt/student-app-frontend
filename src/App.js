import StudentList from "./components/studentList/StudentList";
import "./App.scss";
import useAxios from "./hooks/useAxios";
import Container from "./components/container/Container";
import Loading from "./components/loading/Loading";
import Error from "./components/error/Error";

function App() {
  const {
    data: students,
    loading,
    error,
  } = useAxios("/v2/students/?include=grades");
  console.log(
    `<App /> rendederd. Loading=${loading} Error=${error} Num of students:  ${students.length}`
  );

  function renderContent() {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList students={students} />;
    }
  }

  return (
    <div className="App">
      <Container>{renderContent()}</Container>
    </div>
  );
}

export default App;
