import React from 'react'
// import './signup.css'

const Signup = (props) => {
  return (
    <form onSubmit={props.onClick} className='main-div' >
          <h1 className='sign-text'>Sign up</h1>
          <div  >
          <div className='input-box'>
            <input type="text"
             placeholder='Username' id='username' onChange={props.onChange_Handle_username} required />
          </div>

          <div className='input-box'>
            <input type="email"
             placeholder='Email' id='email' onChange={props.onChange_Handle_email} required />
          </div>

          <div className='input-box'>
            <input type="password"
             placeholder='password' id='password' onChange={props.onChange_Handle} required />
          </div>
          </div>

          <div className='remember-forgot'>
            <label><input type="checkbox" />I agree to the terms & conditions</label>
          </div>

          <button className='submit' type='submit' >Sign up</button>


          <div className='signup-link'>
            <p>Don't have an account? <span style={{color:"white",cursor:"pointer"}} onClick={props.onClick_Handle_N}>Login</span></p>
          </div>  

        </form>
  )
}

export default Signup
