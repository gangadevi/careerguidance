import React from "react";
import { Row, Col, Button } from "react-bootstrap";

class CareerpathComponent extends React.Component {
  render() {
    return (
      <div className='careerpath'>
        <hr></hr>
        <Row>
          <Col xs={8}>
            <h2 style={{ color: "#0b98dc" }}>Area of interest</h2>
            <br></br>

            <form method='POST' action='/post-feedback'>
              <div class='dropdown'>
                <button
                  type='button'
                  class='btn btn-info dropdown-toggle'
                  data-toggle='dropdown'
                >
                  Select your area of interest
                </button>
                <div class='dropdown-menu'>
                  <a class='dropdown-item' href='#'>
                    Link 1
                  </a>
                  <a class='dropdown-item' href='#'>
                    Link 2
                  </a>
                  <a class='dropdown-item' href='#'>
                    Link 3
                  </a>
                  <div class='dropdown-divider'></div>
                  <a class='dropdown-item' href='#'>
                    Another link
                  </a>
                </div>
              </div>
              <input type='submit' value='Submit'></input>
            </form>
          </Col>
          <Col xs={4}>
            <h4 style={{ color: "#0b98dc" }}>Offered Courses</h4>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CareerpathComponent;
