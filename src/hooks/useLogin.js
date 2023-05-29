import { useState } from 'react';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      // API request
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful
        setLoading(false);
        // Perform any additional actions, such as storing the token in localStorage
      } else {
        // Login failed
        const data = await response.json();
        setLoading(false);
        setError(data.message);
      }
    } catch (error) {
      // Error occurred during login request
      setLoading(false);
      setError('An error occurred. Please try again.');
    }
  };

  return { loading, error, login };
};

export default useLogin;
