import React from "react";
import { NavLink } from "react-router-dom";

class LoginComponent extends React.Component {
  render() {
    return (
      <div className='login'>
        <hr></hr>
        <div class='row'>
          <div class='col-md-8'>
            <div class='signup-form'>
              <form action='#' method='post'>
                <h2>Login</h2>
                <hr></hr>
                <div class='form-group'>
                  <input
                    type='email'
                    class='form-control'
                    name='email'
                    id='email'
                    placeholder='email'
                    required='required'
                  ></input>
                </div>
                <div class='form-group'>
                  <input
                    type='password'
                    class='form-control'
                    name='password'
                    id='password'
                    placeholder='Password'
                    required='required'
                  ></input>
                </div>
                <div class='form-group'>
                  <button
                    type='button'
                    class='btn btn-primary btn-lg'
                    onclick='login();'
                  >
                    Login
                  </button>
                  <br></br>
                </div>
              </form>
              <div class='hint-text'>
                <span class=''>
                  Don't have an account?
                  <NavLink
                    class='space-left'
                    activeClassName='active'
                    to='/signup'
                  >
                    Register Here
                  </NavLink>
                </span>
                <a href='#' class='forgotpwd'>
                  Forgot Password
                </a>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <h4>
              <a href='#' class='txtcolor'>
                What is career counseling?
              </a>
            </h4>
            <p class='text-justify '>
              Your career development is a lifelong process that, whether you
              know it or not, actually started when you were born! There are a
              number of factors that influence your career development,
              including your interests, abilities, values, personality,
              background, and circumstances.
              <br></br>
              <br></br>
              <button type='button' class='btn btn-secondary'>
                Read More
              </button>
              <br></br>
            </p>
            <h4>
              <a href='#' class='txtcolor'>
                Why do we need counseling?
              </a>
            </h4>
            <p class='text-justify '>
              Career Counseling can be appropriate for anyone, including
              freshmen, sophomores, juniors, seniors, and even alumni. The
              earlier you get started making intentional decisions about your
              future, however, the better prepared you will be! We recommend
              that all freshmen come in and visit with a Career Counselor.
              <br></br> <br></br>
              <button type='button' class='btn btn-secondary'>
                Read More
              </button>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginComponent;
