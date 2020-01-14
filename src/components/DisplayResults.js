import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import resultsList from "../resultsList";

const DisplayResults = () => {
  return (
    <div className="state-container">
      {resultsList.map((state, index) => (
        <div key={index} className="state-item">
          <FontAwesomeIcon icon={faCheckCircle} className="state-check" />
          <p className="state-name">{state}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayResults;
