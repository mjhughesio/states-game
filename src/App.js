import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import DisplayResults from "./components/DisplayResults";

const App = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const getAnswer = answer => {
    const newAnswers = [answer, ...userAnswers];
    setUserAnswers(newAnswers);
    console.log(userAnswers);
  };

  return (
    <Fragment>
      <Header />
      <main className="container">
        <UserForm getAnswer={getAnswer} />
        <DisplayResults />
      </main>
    </Fragment>
  );
};

export default App;
