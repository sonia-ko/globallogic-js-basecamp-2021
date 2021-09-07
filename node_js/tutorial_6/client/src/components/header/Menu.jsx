import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-items">
        <li className="menu-item">
          <Link to="/home">Home page</Link>
        </li>
        <li>
          <Link to="/cities">Cities</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
