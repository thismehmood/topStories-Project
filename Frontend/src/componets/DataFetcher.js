import { useEffect } from "react";
import axios from "axios";

const DataFetcher = ({ setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/top-stories"
        );
        setData(response.data.response.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setData]);

  return null; // We don't render anything in this component
};

export default DataFetcher;
