import "./Header.css";
import { useRouteMatch, Link } from "react-router-dom";

function Header() {
  const { url } = useRouteMatch();

  return (
    <header>
      <nav className="menu-container">
        <div>
          <Link to={`${url}users`}>Users</Link>
        </div>
        <div>
          <Link to={`${url}todoList`}>To-Do List</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
