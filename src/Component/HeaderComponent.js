import React from "react";
import logo from "../Assets/Logo.png";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className='header'>
        <nav class='navbar'>
          <NavLink class='navbar-brand' exact activeClassName='active' to='/'>
            <img
              src={logo}
              class='img-fluid'
              width='200px'
              height='70px'
              class='d-inline-block align-top logoalign'
              alt=''
              loading='lazy'
            ></img>
          </NavLink>

          <ul class='nav justify-content-end'>
            <li class='nav-item'>
              <NavLink
                class='nav-link active'
                activeClassName='active'
                to='/careerpath'
              >
                Career Path
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink class='nav-link active' activeClassName='active' to='/'>
                Offered Courses
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink class='nav-link active' activeClassName='active' to='/'>
                Get Support
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink
                class='nav-link active'
                // style={{ color: "white" }}
                activeClassName='active'
                to='/signup'
              >
                Login/Signup
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default HeaderComponent;
