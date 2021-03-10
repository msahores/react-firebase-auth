import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/auth';
import ErrorNotice from '../../components/ErrorNotice';
import { AppDispatch, RootReducerT } from '../../store/reducers';

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  let error = useSelector((state: RootReducerT) => state.authState.error?.message)

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = e.target.elements as any;
    try {
      await dispatch(login(email.value, password.value))
    } catch (error) {
      return;
    }
  };

  return (
    <div className="card styled-container">
      <h2>Sign In</h2>
      {error && <ErrorNotice message={error} clearError={() => error = ''} />}
      <form onSubmit={handleSubmit} className="login-form form">
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          type="email" 
          autoComplete="on"
        />
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          type="password" 
          autoComplete="on"
        />
        <button type="submit">Submit</button>
      </form>
      <span>Don't have an account already? </span>
      <Link to="/register"><b>Register</b></Link>
    </div>
  );
};

export default Login;
