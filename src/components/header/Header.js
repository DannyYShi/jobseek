import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <Link className="navbar-logo" to="/">
          Jobseek
        </Link>
      </nav>
    </div>
  );
}
