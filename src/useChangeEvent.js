import { useState } from "react";

export default function useChangeEvent() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function changeHandler(event) {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(data);
  return {
    data,
    onChangeEvent: changeHandler,
  };
}
