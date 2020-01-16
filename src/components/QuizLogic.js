import { useState, useRef, useEffect } from "react";

const QuizLogic = (startingTime = 360) => {
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const textBoxRef = useRef(null);

  const startGame = () => {
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  };

  const endGame = () => {
    setIsTimeRunning(false);
  };

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    timeRemaining,
    isTimeRunning,
    startGame,
    textBoxRef,
  };
};

export default QuizLogic;
