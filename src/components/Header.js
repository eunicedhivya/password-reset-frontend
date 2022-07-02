import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <h1>Password Reset</h1>
            {/* <span className="fs-4">Pricing example</span> */}
          </a>
          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
