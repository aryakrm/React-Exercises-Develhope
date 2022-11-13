import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Back to Home</Link>
        </li>
      </ul>
      <h1>Ooops!! This page is not Found</h1>
    </div>
  );
}
