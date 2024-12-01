import { useState, useEffect } from 'react';
import TestResultPage from './TestResultPage';  // Adjust import path as needed
import Negative from './Negative';  // Adjust import path as needed

const TestResultPageHandler = () => {
  const [result, setResult] = useState(null);

  // Simulate fetching AI result or replace with real API call
  useEffect(() => {
    setTimeout(() => {
      // Simulating an AI result: can be positive or negative
      setResult('positive');  // Change this based on your result (e.g., 'negative' or 'positive')
    }, 2000);  // Simulating a delay of 2 seconds
  }, []);

  if (result === null) {
    return <div>Loading...</div>;  // Show loading until result is available
  }

  return (
    <div>
      {result === 'positive' ? <TestResultPage /> : <Negative />}
    </div>
  );
};

export default TestResultPageHandler;
