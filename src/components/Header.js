import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faCouch} className="header-logo" />
      <div>
        <h1 className="header-old-title">
          The One Where Chandler Doesn't Like Dogs
        </h1>
        <h1 className="header-new-title">The One With The States</h1>
      </div>
    </header>
  );
};

export default Header;
