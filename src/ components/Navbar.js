import React from "react";
import "./css/navbar.css";
import logo from "./images/logo.png";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-light bg">
        <a class="navbar-brand">
          <img
            src={logo}
            width="30"
            height="30"
            class="d-inline-block align-top mr-2"
            alt=""
          />
          Revientapp
        </a>
      </nav>
    </>
  );
}
