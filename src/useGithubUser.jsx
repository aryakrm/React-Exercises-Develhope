import { useState } from "react";

export function useGithubUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const json = await res.json();
      if (res.status !== 200) {
        setError(new Error("user not found"));
      }

      setData(json);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
    onFetchUser: fetchGithubUser,
  };
}
