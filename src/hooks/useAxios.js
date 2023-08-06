import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = process.env.REACT_APP_API;

  useEffect(() => {
    console.log("useAxios() fired");

    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await axios.get(`${API}${url}`);
        console.log("axios response", response);
        const { data } = response.data;
        // data.split(",");
        console.log("useAxios() fetched data", data);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [API, url]);

  return { data, loading, error };
}
