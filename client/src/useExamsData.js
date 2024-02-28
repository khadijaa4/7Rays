import { useState, useEffect } from "react";
const useExamsData = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:9000/exams");
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
            const jsonData = await response.json();
            setData(jsonData);
        }  catch (error) {
            console.error("Error fetching data:", error);
          }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return [data, fetchData];
};
export default useExamsData;