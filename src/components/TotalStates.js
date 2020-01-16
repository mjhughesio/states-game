import React from "react";
import PropTypes from "prop-types";

const TotalStates = ({ isTimeRunning, timeRemaining, userAnswers }) => {
  let motivation;
  let color;
  if (!isTimeRunning && userAnswers.length === 0) {
    motivation = "Are you ready to get started?";
  } else if (isTimeRunning && userAnswers.length === 0) {
    motivation = "Here we go! Good luck!";
  } else if (isTimeRunning && userAnswers.length < 10) {
    motivation = "Great start! Keep going!";
  } else if (isTimeRunning && userAnswers.length < 20) {
    motivation = "Nice! Double digits!";
  } else if (isTimeRunning && userAnswers.length < 30) {
    motivation = "In the 20's now! Well done!";
  } else if (isTimeRunning && userAnswers.length < 40) {
    motivation = "The dirty 30's! Keep going!";
  } else if (isTimeRunning && userAnswers.length < 45) {
    motivation = "Over the hill! Almost there!";
  } else if (isTimeRunning && userAnswers.length < 50) {
    motivation = "So close! We believe!";
  } else if (isTimeRunning && userAnswers.length === 50) {
    motivation = "CONGRATULATIONS!";
    color = "green";
  }

  let tracker;
  if (timeRemaining === 0) {
    tracker = `Time's up! That's ${userAnswers.length} states!`;
  } else {
    tracker = `You've guessed ${userAnswers.length} / 50 states!`;
  }

  return (
    <div className="total-container">
      <h3>{tracker}</h3>
      <p style={{ color }}>{motivation}</p>
    </div>
  );
};

TotalStates.propTypes = {
  isTimeRunning: PropTypes.bool.isRequired,
  timeRemaining: PropTypes.number.isRequired,
  userAnswers: PropTypes.array.isRequired,
};

export default TotalStates;
