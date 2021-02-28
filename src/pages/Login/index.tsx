import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';
import ErrorNotice from '../../components/ErrorNotice';
import { AppDispatch } from '../../store/reducers';

const Login = () => {
  const [error, setError] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = e.target.elements as any;
    try {
      await dispatch(login(email.value, password.value))
    } catch (error) {
      error.message && setError(error.message);
    }
  };

  return (
    <div className="card styled-container">
      <h2>Sign In</h2>
      {error && <ErrorNotice message={error} clearError={() => setError('')} />}
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
