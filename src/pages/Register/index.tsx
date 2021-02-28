import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../store/actions/auth';
import ErrorNotice from '../../components/ErrorNotice';

const Register = () => {
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {userName, email, password} = e.target.elements as any;
    try {
      await dispatch(register(email.value, password.value, userName.value))
    } catch (error) {
      error.message && setError(error.message)
    }
  };
  return (
    <div className="card styled-container">
      <h2>Register</h2>
      {error && <ErrorNotice message={error} clearError={() => setError('')} />}
      <form onSubmit={handleSubmit} className="register-form form">
        <label htmlFor="userName">User Name</label>
        <input id="userName" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          type="password"
          autoComplete="on"
        />
        <button type="submit">Sign Up</button>
      </form>
      <span>Already Registered? </span>
      <Link to="/login"><b>Login</b></Link>
    </div>
  );
};

export default Register;
