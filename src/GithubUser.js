import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GithubUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { username } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
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
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>The username is not found</h1>}
      {data && <h1>{data.name}</h1>}
      {data && <h2>{data.bio}</h2>}
      {data && <img src={data.avatar_url} alt="profile pic" />}
    </div>
  );
}
