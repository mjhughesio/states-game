import React, { Fragment, useState, useRef } from "react";

const UserForm = () => {
  const [answer, setAnswer] = useState("");
  const textBoxRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const answerLC = answer.toLowerCase();
    console.log(answerLC);
    setAnswer("");
  };

  return (
    <Fragment>
      <form onSubmit={e => handleSubmit(e)}>
        <h4 className="form-title">Please enter the name of a state</h4>
        <input
          className="form-field"
          ref={textBoxRef}
          type="text"
          name="answer"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          required
        />
        <small className="form-subtitle">Answers are NOT case sensitive</small>
        <button className="form-btn">SUBMIT</button>
      </form>
    </Fragment>
  );
};

export default UserForm;
