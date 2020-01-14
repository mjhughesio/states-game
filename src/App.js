import React, { Fragment } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <UserForm />
      </main>
    </Fragment>
  );
}

export default App;
