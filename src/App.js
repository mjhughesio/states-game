import React, { Fragment } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import StartClock from "./components/StartClock";
import TotalStates from "./components/TotalStates";
import DisplayResults from "./components/DisplayResults";
import QuizLogic from "./components/QuizLogic";
import resultsList from "./resultsList";

const App = () => {
  const {
    userAnswers,
    setUserAnswers,
    timeRemaining,
    isTimeRunning,
    startGame,
    textBoxRef,
    startingTime,
  } = QuizLogic();

  const getAnswer = answer => {
    if (resultsList.includes(answer) && !userAnswers.includes(answer)) {
      const newAnswers = [answer, ...userAnswers];
      setUserAnswers(newAnswers.sort());
    } else if (userAnswers.includes(answer)) {
      alert(`${answer.toUpperCase()} has already been guessed! Pivot!`);
    } else if (!resultsList.includes(answer)) {
      alert(`${answer.toUpperCase()}?! That's not even a word!`);
    }
  };

  return (
    <Fragment>
      <Header />
      <main className="container">
        <UserForm
          getAnswer={getAnswer}
          textBoxRef={textBoxRef}
          isTimeRunning={isTimeRunning}
        />
        <StartClock
          timeRemaining={timeRemaining}
          startGame={startGame}
          isTimeRunning={isTimeRunning}
        />
        <TotalStates
          isTimeRunning={isTimeRunning}
          timeRemaining={timeRemaining}
          userAnswers={userAnswers}
          startingTime={startingTime}
        />
        <DisplayResults
          userAnswers={userAnswers}
          timeRemaining={timeRemaining}
        />
      </main>
    </Fragment>
  );
};

export default App;
