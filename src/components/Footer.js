import React from "react";
import "./Footer.css";
function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <p>copyright © {date}</p>
    </footer>
  );
}

export default Footer;
