import React from "react";
import { NavLink } from "react-router-dom";

class SignupComponent extends React.Component {
  render() {
    return (
      <div className='signup'>
        <hr></hr>
        <div class='row'>
          <div class='col-md-8'>
            <div class='signup-form'>
              <form action='#' method='post'>
                <h2>Registration</h2>
                <hr></hr>
                <div class='form-group'>
                  <div class='row'>
                    <div class='col'>
                      <input
                        type='text'
                        class='form-control'
                        id='fname'
                        name='first_name'
                        placeholder='First Name'
                      ></input>
                    </div>
                    <div class='col'>
                      <input
                        type='text'
                        class='form-control'
                        id='lname'
                        name='last_name'
                        placeholder='Last Name'
                      ></input>
                    </div>
                  </div>
                </div>
                <div class='form-group'>
                  <div class='row'>
                    <div class='col'>
                      <div class='radio'>
                        <label>
                          <input type='radio' name='gender'></input> Male
                        </label>
                        <label>
                          <input type='radio' name='gender'></input> Female
                        </label>
                        <label>
                          <input type='radio' name='gender'></input> Other
                        </label>
                      </div>
                    </div>
                    <div class='col'>
                      <input
                        type='tel'
                        class='form-control'
                        id='phoneno'
                        size='6'
                        maxlength='10'
                        name='Phoneno'
                        placeholder='Phone Number'
                      ></input>
                    </div>
                  </div>
                </div>

                <div class='form-group'>
                  <div class='row'>
                    <div class='col'>
                      <input
                        type='email'
                        class='form-control'
                        id='email'
                        name='email'
                        placeholder='Email'
                      ></input>
                    </div>
                    <div class='col'>
                      <select class='form-control' id='location'>
                        <option value='I am a'>I am a</option>
                        <option value='Student'>Student</option>
                        <option value='Graduate'>Graduate</option>
                        <option vlaue='Professional'>Professional</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class='form-group'>
                  <div class='row'>
                    <div class='col'>
                      <input
                        type='password'
                        class='form-control'
                        id='password'
                        name='password'
                        placeholder='Password'
                      ></input>
                    </div>
                    <div class='col'>
                      <input
                        type='password'
                        class='form-control'
                        id='repwd'
                        name='confirm_password'
                        placeholder='Confirm Password'
                      ></input>
                    </div>
                  </div>
                </div>
                <div class='form-group'>
                  <label class='form-check-label'>
                    <input type='checkbox' id='condition'></input> I accept the
                    <a href='#'>Terms and conditions </a> &
                    <a href='#'> Privacy policy</a>
                  </label>
                </div>
                <div class='form-group'>
                  <input
                    type='button'
                    class='btn btn-primary btn-lg'
                    onclick='signup();'
                    value='Sign Up'
                  ></input>
                </div>
              </form>
              <div class='hint-text'>
                Already have an account?
                <NavLink
                  class='space-left'
                  activeClassName='active'
                  to='/login'
                >
                  Login here
                </NavLink>
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
              <br></br>
              <br></br>
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
export default SignupComponent;
