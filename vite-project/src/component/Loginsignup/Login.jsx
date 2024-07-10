// Login.js
import React, { useState } from 'react';
import './Loginsignup.css';

const Login = (props) => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  return (
    <div className=' main-div'>
    <form onSubmit={props.onSubmit} >
      <h1 className='sign-text'>Login</h1>
      <div className='input-box'>
        <input onChange={props.onChange_login} type="email" placeholder='email' required />
      </div>
      <div className='input-box'>
        <input onChange={props.onChange_login_password} type="password" placeholder='Password' required />
      </div>
      <div className='remember-forgot'>
        <label><input type="checkbox" />Remember me</label>
      </div>
      <button className='submit' type='submit'>Login</button>
      <div className='signup-link'>
        <p>Don't have an account? <span style={{color:"white",cursor:"pointer"}} onClick={props.onChange_sign_N}>Sign up</span></p>
      </div>
    </form>
  </div>
  );
}

export default Login;
