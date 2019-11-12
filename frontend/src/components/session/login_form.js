import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../actions/session_actions';

const LoginForm = props => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors.session);
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');

  const setter = set => e => {
    const { target } = e;
    const { value } = target;
    set(value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email: emailInput,
      password: passwordInput
    };

    dispatch(login(userData));
  }

  const renderErrors = () => {
    return (
      <ul>
        {Object.keys(errors).map((error, i) => (
          <li key={`error-${i}`}>
            {errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
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
          <input type="submit" value="Submit" />
          {renderErrors()}
        </div>
      </form>
    </div>
  )
}

export default LoginForm;
