import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faCouch} className="header-logo" />
      <h1 className="header-title">The One With The 50 States</h1>
    </header>
  );
};

export default Header;
