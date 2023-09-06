import React from 'react';
import { Button, Stack } from 'react-bootstrap';
//import './Login.css';

function Login(props) {
  return (

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <div>
                <form>
                  <div>
                    <h3>Welcome to our React Tutorial</h3>
                    <div className="form-group mt-3">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <p>or <a href="#">Sign up?</a></p>
                    </div>

                    <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Log In
                      </button>
                    </div>
                    <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Login;
