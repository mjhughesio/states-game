import React from "react";
import PropTypes from "prop-types";

const StartClock = ({ timeRemaining, startGame, isTimeRunning }) => {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining - minutes * 60;

  return (
    <div className="clock-container">
      <h2 className="clock-title">Time Remaining:</h2>
      {timeRemaining > 59 ? (
        <p className="clock-time">
          {minutes} minute(s) and {seconds} second(s)
        </p>
      ) : (
        <p className="clock-time clock-color">
          {minutes} minute(s) and {seconds} second(s)
        </p>
      )}
      <button
        onClick={startGame}
        className="form-btn-start"
        disabled={isTimeRunning}
      >
        START
      </button>
    </div>
  );
};

StartClock.propTypes = {
  timeRemaining: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired,
  isTimeRunning: PropTypes.bool.isRequired,
};

export default StartClock;
