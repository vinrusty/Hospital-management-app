import React from 'react'
import './login.css'

function Login() {
    return (
        <div className='login-wrap'>
          <div className='d-flex flex-column login-card shadow'>
          <div className='d-grid'>
            <h2 className='text-center'>Sign In</h2>
            <img className='login-image mt-4' src='/images/health2.png' />
          </div>
          <div className='form-content'>
            <div className='d-grid mt-4'>
            <div class="input-group mb-3">
            <input type="email" class="form-control border-0" placeholder="example@xyz.com" aria-label="Email" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
            <input type="password" class="form-control border-0" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            </div>
            </div>
            <div class="d-grid">
            <button class="btn btn-primary mb-3" type="button">Login</button>
            <p className='text-center'>Forgot your password?</p>
            </div>
          </div>
          </div>
        </div>
    )
}

export default Login
