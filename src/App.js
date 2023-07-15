import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  console.log("<App /> rendederd");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8888");
      console.log(response);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
