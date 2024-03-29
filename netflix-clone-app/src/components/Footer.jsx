import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="bottom-icon active">
        <i className="fa-solid fa-house"></i>
        <p>Home</p>
      </div>
      <div className="bottom-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
        <p>Search</p>
      </div>
      <div className="bottom-icon">
        <i className="fa-solid fa-arrow-down"></i>
        <p>Download</p>
      </div>
      <div className="bottom-icon">
        <i className="fa-solid fa-bars"></i>
        <p>More</p>
      </div>
    </footer>
  );
};
