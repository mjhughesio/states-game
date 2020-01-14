import React, { Fragment, useState, useRef } from "react";
import PropTypes from "prop-types";

const UserForm = ({ getAnswer }) => {
  const [answer, setAnswer] = useState("");
  const textBoxRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    getAnswer(answer.toLowerCase());
    setAnswer("");
    textBoxRef.current.focus();
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

UserForm.propTypes = {
  getAnswer: PropTypes.func.isRequired,
};

export default UserForm;
