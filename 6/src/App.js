import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialCount = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(0);
          }, 1000);
        });
        setCount(initialCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const double = () => setCount(count * 2);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
