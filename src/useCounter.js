import { useCallback, useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);
  const onIncrement = useCallback(function onIncrement() {
    setCounter((c) => c + 1);
  }, []);
  const onDecrement = useCallback(function onDecrement() {
    setCounter((c) => c - 1);
  }, []);
  const onReset = useCallback(function onReset() {
    setCounter(0);
  }, []);

  return {
    counter: counter,
    onIncrement: onIncrement,
    onDecrement: onDecrement,
    onReset: onReset,
  };
}
