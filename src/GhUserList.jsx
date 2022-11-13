export default function GhUserList({ data }) {
  return (
    <div>
      {data && (
        <div key={data.id}>
          <h3>{data.name}</h3>
          <img
            src={data.avatar_url}
            alt="profile pic"
            style={{ width: "8rem", borderRadius: "50%" }}
          />
        </div>
      )}
    </div>
  );
}
