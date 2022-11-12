import { useState } from "react";
export default function GithubUserList({ newUser, changeHandler }) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userList, setUserList] = useState([]);

  const clickHandler = (e) => {
    setLoading(true);
    fetch(`https://api.github.com/users/${newUser}`)
      .then((res) => {
        if (res.status !== 200) {
          setError(new Error("user not found"));
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
    setUserList((userList) => [
      ...userList,
      { name: `${data.name}`, img: `${data.avatar_url}` },
    ]);
    e.preventDefault();
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={newUser}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Add new User</button>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>The user is not found</p>}
        {data &&
          userList.map((user) => {
            return (
              <div>
                <p>{user.name}</p>
                <img src={user.img} alt="userPic" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
