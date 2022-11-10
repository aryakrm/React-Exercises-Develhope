import { useState, useEffect } from "react";

export default function ClickCounter() {
  let [count, setCount] = useState(0);
  const clickHandler = (event) => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(`the number is ${count}`);
    return () => {
      console.log(`the number was ${count}`);
    };
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clickHandler}>increase +</button>
    </div>
  );
}
