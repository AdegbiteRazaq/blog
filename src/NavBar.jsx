import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Razaq Blog</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </div>
  );
}
