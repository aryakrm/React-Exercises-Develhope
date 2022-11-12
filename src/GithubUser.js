import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function clickHandler() {
    onFetchUser(username);
  }

  return (
    <div>
      <button onClick={clickHandler}>Load new User</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>The username is not found</h1>}
      {data && <h1>{data.name}</h1>}
      {data && <h2>{data.bio}</h2>}
      {data && <img src={data.avatar_url} alt="profilePic" />}
    </div>
  );
}
