import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <a href="index.html">
          <img src="images/netflix.png" id="logo1hide" alt="logo" />
          <img src="images/Netflix2.png" id="logo2hide" alt="logo" />
        </a>
        <a href="#home" className="active" id="hide">
          {" "}
          Home{" "}
        </a>
        <a href="#Shows">TV shows</a>
        <a href="#Movies">Movies</a>
        <a href="#Popular" id="hide">
          {" "}
          New & Popular{" "}
        </a>
        <a href="#Mylist">My List</a>
        <a href="#browsebylanguage" id="hide">
          {" "}
          Browse by Languages{" "}
        </a>
      </div>
      <div className="header-right">
        <span id="hide">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span id="hide">
          <a href="#Children">Children</a>
        </span>
        <span id="hide">
          <i className="fa-regular fa-bell"></i>
          <small className="notify-counter">5</small>
        </span>
        <span id="hide">
          <img className="avatar" src="./images/avatar.png" alt="" />
        </span>
        <span className="arrow" id="hide">
          <i className="fa-solid fa-caret-down"></i>
        </span>
      </div>
    </header>
  );
}
