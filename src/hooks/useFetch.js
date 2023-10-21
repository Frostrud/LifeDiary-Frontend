import { useState } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);

    const baseUrl = "http://localhost:8080"; // The base url for the endpoint.

    const fetchData = async (endpoint, method, body = null) => {

        setLoading(true);
        setError(null);
        setStatus(null);

        try {
            const options = {
              method,
              headers: {
                'Content-Type': 'application/json',
              },
            }

            if(method !== "GET" && body) {
              options.body = JSON.stringify(body);
            }

            console.log(`${baseUrl}${endpoint}`);
            const response = await fetch(`${baseUrl}${endpoint}`, options);
      
            setStatus(response.status); // Extracts and sets the response status
      
            if (!response.ok) {
              throw new Error('Request failed.');
            }
      
            const responseData = await response.json();
            setData(responseData);
            
          } catch (err) {
            setError(err.message || 'Something went wrong.');
            console.error(err); 
          }
      
          setLoading(false);

    }

    return {data, loading, error, status, fetchData};
}
 
export default useFetch;