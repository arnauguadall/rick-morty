import { Outlet, Link } from "react-router-dom";

import './layout.css';

const Layout = () => {
  return (
    <div className="layout__nav__style">
      <nav>
        <ul>
          <li>
            <Link to="/">Back to characters</Link>
          </li>
          <li>
            <Link to="/character/2">Character</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
