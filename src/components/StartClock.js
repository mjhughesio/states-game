import React from "react";
import PropTypes from "prop-types";

const StartClock = ({ timeRemaining, startGame, isTimeRunning }) => {
  return (
    <div className="clock-container">
      <button
        onClick={startGame}
        className="form-btn-start"
        disabled={isTimeRunning}
      >
        START
      </button>
      <h2>Time Remaining: {timeRemaining}</h2>
    </div>
  );
};

StartClock.propTypes = {
  timeRemaining: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired,
  isTimeRunning: PropTypes.bool.isRequired,
};

export default StartClock;
