import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => {
      console.log("clears");
    };
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}

export default Counter;
