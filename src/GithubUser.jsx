import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function handleClick() {
    onFetchUser();
  }

  return (
    <div>
      <button onClick={handleClick}>load user</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>The username is not found</h1>}
      {data && <h1>{data.name}</h1>}
      {data && <h2>{data.bio}</h2>}
      {data && <img src={data.avatar_url} alt="profilePic" />}
    </div>
  );
}
