import { useState } from "react";
import GhUserList from "./GhUserList";

export default function GhUser() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Did you mean like this?
  const [userList, setUserList] = useState(["Arya", "Aiman", "Mikolaj"]);

  function addUser() {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (res.status !== 200) {
          setError(new Error("User not found"));
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setLoading(false);
        setData(json);
      })
      .catch((err) => {
        setError(err);
      });
    setUserList((userList) => [...userList, <GhUserList data={data} />]);
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={addUser}>Add GitHub User</button>
      <div>
        {loading && <h1>Loading....</h1>}
        {error && <h1>User is not Found</h1>}
        <GhUserList data={data} />
        {userList.map((user) => user)}
      </div>
    </div>
  );
}
