import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { signup } from "../../actions/session_actions";

const SignupForm = props => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors.session);
  const [handleInput, setHandle] = useState("");
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [password2Input, setPassword2] = useState("");

  const setter = set => e => {
    const { target } = e;
    const { value } = target;
    set(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      handle: handleInput,
      email: emailInput,
      password: passwordInput,
      password2: password2Input
    };

    dispatch(signup(userData));
  };

  const renderErrors = () => {
    return (
      <ul>
        {Object.keys(errors).map((error, i) => (
          <li key={`error-${i}`}>{errors[error]}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={handleInput}
            onChange={setter(setHandle)}
            placeholder="Username"
          />
          <input
            type="text"
            value={emailInput}
            onChange={setter(setEmail)}
            placeholder="Email"
          />
          <input
            type="password"
            value={passwordInput}
            onChange={setter(setPassword)}
            placeholder="Password"
          />
          <input
            type="password"
            value={password2Input}
            onChange={setter(setPassword2)}
            placeholder="Confirm Password"
          />
          <input type="submit" value="Submit" />
          {renderErrors()}
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
