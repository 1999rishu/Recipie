import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <nav className="naver">
        <ul>
          <li>
            <Link to="/recFinder">Recipe</Link>
          </li>
          <li>
            <Link to="/log">Login</Link>
          </li>
        </ul>
      </nav>

      <section>
        <h1>
          <Link to="/recFinder">Go To Recipe Page</Link>
        </h1>
      </section>
      <Outlet />
    </div>
  );
};

export default Header;
