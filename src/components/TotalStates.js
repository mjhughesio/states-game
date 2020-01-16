import React from "react";
import PropTypes from "prop-types";

const TotalStates = ({ timeRemaining, userAnswers }) => {
  let motivation;
  let color;
  if (userAnswers.length === 0) {
    motivation = "Are you ready to get started?";
  } else if (userAnswers.length < 10) {
    motivation = "Great start! Keep going!";
  } else if (userAnswers.length < 20) {
    motivation = "Nice! Double digits!";
  } else if (userAnswers.length < 30) {
    motivation = "In the 20's now! Well done!";
  } else if (userAnswers.length < 40) {
    motivation = "The dirty 30's! Keep going!";
  } else if (userAnswers.length < 45) {
    motivation = "Over the hill! Almost there!";
  } else if (userAnswers.length < 50) {
    motivation = "So close! We believe!";
  } else if (userAnswers.length === 50) {
    motivation = "CONGRATULATIONS!";
    color = "green";
  }

  return (
    <div className="total-container">
      {timeRemaining === 0 ? (
        <h3>Time's up! That's {userAnswers.length} states!</h3>
      ) : (
        <h3>You've guessed {userAnswers.length} / 50 states!</h3>
      )}
      <p style={{ color }}>{motivation}</p>
    </div>
  );
};

TotalStates.propTypes = {
  timeRemaining: PropTypes.number.isRequired,
  userAnswers: PropTypes.array.isRequired,
};

export default TotalStates;
