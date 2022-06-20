import { Outlet, Link } from "react-router-dom";

import './layout.css';

/**
 * Layout component
 * It renders the layout of the app with it's navigation menu
 * @returns {JSX.Element}
 */
const Layout = () => {
  return (
    <div className="layout__nav__style">
      <nav>
        <ul>
          <li>
            <Link to="/">Back to characters</Link>
          </li>
          <li>
            <Link to="/user/create">Create user</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
