import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";


export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>JOBSEEK</h1>
      <p>
        A simple, clean dashboard for you to organize your journey to finding a
        new job. To infinity, and beyond!
      </p>
      <Link className="enter-btn" to="/app">
        <button variant="contained" size="large">
          ENTER HERE
        </button>
      </Link>
    </div>
  );
}
