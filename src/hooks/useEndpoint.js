import { useState, useEffect } from 'react';

const useEndpoint = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const baseUrl = "http://localhost:8080"; // The base url for the endpoint.

  const fetchData = async (endpoint, method = 'GET', body = null) => {
    setLoading(true);
    setError(null);
    setStatus(null);

    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : null,
      });

      setStatus(response.status); // Extract and set response status

      if (!response.ok) {
        throw new Error('Request failed.');
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    }

    setLoading(false);
  };

  return { data, loading, error, status, fetchData };
};

export default useEndpoint;



