export default function ShowGithubUser({ loading, error, data, userList }) {
  return (
    <div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>The user is not found</p>}
        {data &&
          userList.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <img src={user.img} alt="userPic" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
