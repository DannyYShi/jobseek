import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Button from "@material-ui/core/Button";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>JOBSEEK</h1>
      <p>
        A simple, clean dashboard for you to organize your journey to finding a
        new job. To infinity, and beyond!
      </p>
      <Link className="enter-btn" to="/app">
        <Button variant="contained" size="large">
          ENTER HERE
        </Button>
      </Link>
    </div>
  );
}
