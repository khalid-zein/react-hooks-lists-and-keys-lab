import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navBarItems = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return <nav>{navBarItems}</nav>;
}

export default NavBar;
