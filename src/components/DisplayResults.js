import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const DisplayResults = ({ userAnswers }) => {
  return (
    <div className="state-container">
      {userAnswers.map((state, index) => (
        <div key={index} className="state-item">
          <FontAwesomeIcon icon={faCheckCircle} className="state-check" />
          <p className="state-name">{state}</p>
        </div>
      ))}
    </div>
  );
};

DisplayResults.propTypes = {
  userAnswers: PropTypes.array.isRequired,
};

export default DisplayResults;
