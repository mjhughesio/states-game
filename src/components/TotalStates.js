import React from "react";
import PropTypes from "prop-types";

const TotalStates = ({
  isTimeRunning,
  timeRemaining,
  userAnswers,
  startingTime,
}) => {
  let motivation;
  let color;
  if (!isTimeRunning && userAnswers.length === 0) {
    motivation = "Let's get started!";
  } else if (isTimeRunning && userAnswers.length === 0) {
    motivation = "Here we go! Good luck!";
  } else if (isTimeRunning && userAnswers.length < 10) {
    motivation = "Great start! Keep going!";
  } else if (isTimeRunning && userAnswers.length < 20) {
    motivation = "Nice! Double digits! It's insanely easy, huh?";
  } else if (isTimeRunning && userAnswers.length < 30) {
    motivation = "In the 20's now! Have you tried South Oregon yet?";
  } else if (isTimeRunning && userAnswers.length < 36) {
    motivation = "The dirty 30's! Try New England. They have a sports team!";
  } else if (isTimeRunning && userAnswers.length < 37) {
    motivation = "Fourteen states to go. Remember, WE care about the Dakotas!";
  } else if (isTimeRunning && userAnswers.length < 40) {
    motivation = "Can you get all 50 before dinner?";
  } else if (isTimeRunning && userAnswers.length < 45) {
    motivation = "Over the hill! Almost there!";
  } else if (isTimeRunning && userAnswers.length < 49) {
    motivation =
      "Look, if you don't know them by now, you will never know them, okay?";
  } else if (isTimeRunning && userAnswers.length < 50) {
    motivation = "Don't listen to Ross. There IS one more!";
  } else if (userAnswers.length === 50) {
    motivation =
      "CONGRATULATIONS! You are the new champ of Chandler's dumb states game!";
    color = "green";
  }

  let tracker;
  if (timeRemaining === 0) {
    tracker = `Time's up! You remembered ${userAnswers.length} states!`;
  } else if (timeRemaining === startingTime) {
    tracker = "FYI. There's only 50 states, not 56.";
  } else {
    tracker = `You've guessed ${userAnswers.length} / 50 states!`;
  }

  return (
    <div className="total-container">
      <h3 className="total-title">{tracker}</h3>
      <p className="total-subtitle" style={{ color }}>
        {motivation}
      </p>
    </div>
  );
};

TotalStates.propTypes = {
  isTimeRunning: PropTypes.bool.isRequired,
  timeRemaining: PropTypes.number.isRequired,
  userAnswers: PropTypes.array.isRequired,
  startingTime: PropTypes.number.isRequired,
};

export default TotalStates;
