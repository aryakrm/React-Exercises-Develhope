import { useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);
  function onIncrement() {
    setCounter((c) => c + 1);
  }
  function onDecrement() {
    setCounter((c) => c - 1);
  }
  function onReset() {
    setCounter(0);
  }

  return {
    counter: counter,
    onIncrement: onIncrement,
    onDecrement: onDecrement,
    onReset: onReset,
  };
}
