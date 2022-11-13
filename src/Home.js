import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>My React App</h1>
      <h2>Choose one:</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/user">Github User</Link>
        </li>
      </ul>
    </div>
  );
}
