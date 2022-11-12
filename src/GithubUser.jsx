import { useState } from "react";
import GithubUserList from "./GithubUserList";

export default function GithubUser() {
  const [username, setUsername] = useState("");

  const changeHandler = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <GithubUserList newUser={username} changeHandler={changeHandler} />
    </div>
  );
}
