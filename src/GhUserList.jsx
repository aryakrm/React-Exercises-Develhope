import { Link, Outlet } from "react-router-dom";

export default function GhUserList({ data, username }) {
  return (
    <div>
      <Link to={`${username}`}>
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
      </Link>
      <Outlet />
    </div>
  );
}
