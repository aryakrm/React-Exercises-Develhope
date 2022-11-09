import { useState } from "react";

export default function Login() {
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
  return (
    <div>
      <form>
        <input
          value={data.username}
          type="text"
          name="username"
          onChange={changeHandler}
        />
        <input
          value={data.password}
          type="password"
          name="password"
          onChange={changeHandler}
        />
        <input
          checked={data.remember}
          type="checkbox"
          name="remember"
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}
