import { useState, useEffect } from "react";
import axios from "axios";
export default function useAxios(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API = process.env.REACT_APP_API;

  useEffect(() => {
    console.log("useEffect() fired");
    async function fetchData(url) {
      setLoading(true);
      try {
        const response = await axios.get(`${API}${url}`);
        const data = response.data.data;
        console.log("useAxios() fetched data", data);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData(url);
  }, []);

  return { data, loading, error };
}
