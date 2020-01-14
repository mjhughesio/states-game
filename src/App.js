import React, { Fragment } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import DisplayResults from "./components/DisplayResults";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <UserForm />
        <DisplayResults />
      </main>
    </Fragment>
  );
}

export default App;
