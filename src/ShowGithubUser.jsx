import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ShowGithubUser() {
  const { username } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
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
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading....</h1>}
      {error && <h1>User is not Found</h1>}
      {data && (
        <div key={data.id}>
          <h3>{data.name}</h3>
          <p>{data.location}</p>
          <p>{data.bio}</p>
        </div>
      )}
    </div>
  );
}
