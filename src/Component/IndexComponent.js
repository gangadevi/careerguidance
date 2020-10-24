import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import slider from "../Assets/cg_option.jpg";
import angular from "../Assets/angular.png";
import react from "../Assets/react.png";
import vue from "../Assets/vue.png";
import javascript from "../Assets/js.png";
import redux from "../Assets/redux.png";
import html5 from "../Assets/html5.png";

class IndexComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <img
          src={slider}
          height='500px'
          class='img-fluid'
          alt='career guidance'
        ></img>
        <br></br>
        <br></br>
        <Container>
          <h2 class='paddingTB30' style={{ color: "#0b98dc" }}>
            Offered Courses
          </h2>
          <hr></hr>
          <Row>
            <Col xs={6} md={4}>
              <Image src={angular} rounded />
              <h4>Angular JS</h4>
              <p class='txtjustify'>
                Angular is a TypeScript-based open-source web application
                framework led by the Angular Team at Google...
                <a href='#'>Readmore</a>
              </p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={react} rounded />
              <h4>React JS</h4>
              <p class='txtjustify'>
                React is an open-source, front end, JavaScript library for
                building user interfaces or UI components...
                <a href='#'>Readmore</a>
              </p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={vue} rounded />
              <h4>Vue JS</h4>
              <p class='txtjustify'>
                Vue.js is an open-source model–view–viewmodel front end
                JavaScript framework for building user interfaces...
                <a href='#'>Readmore</a>
              </p>
            </Col>
          </Row>
          <div class='paddingTB30'></div>
          <Row>
            <Col xs={6} md={4}>
              <Image src={redux} rounded />
              <h4>Redux JS</h4>
              <p>
                Redux is an open-source JavaScript library for managing
                application state. It is most commonly used with libraries...
                <a href='#'>Readmore</a>
              </p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={javascript} rounded />
              <h4>Javascript</h4>
              <p>
                JavaScript, often abbreviated as JS, is a programming language
                that conforms to the ECMAScript specification...
                <a href='#'>Readmore</a>
              </p>
            </Col>
            <Col xs={6} md={4}>
              <Image src={html5} rounded />
              <h4>HTML 5</h4>
              <p>
                HTML5 is a markup language used for structuring and presenting
                content on the World Wide Web...
                <a href='#'>Readmore</a>
              </p>
            </Col>
          </Row>
        </Container>
        <div class='paddingTB30'></div>
        {/* 
          <div class='container'>
            <h1 class='strong'>About US</h1>
            <hr></hr>

            <div class='row'>
              <div class='col-md-6'>
                <h2 class='strong'>
                  Who we are and<br></br>what we do
                </h2>
                <br></br>
                <p class='lead'>
                  This is the career's leading portal to<br></br>
                  <strong>make your future better </strong>
                </p>
              </div>
              <div class='col-md-6'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus. Donec facilisis fermentum sem, ac
                  viverra ante luctus vel. Donec vel mauris quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus. Donec facilisis fermentum sem, ac
                  viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum
                  dolor sit amet. Nulla convallis egestas rhoncus.
                </p>
              </div>
            </div>
          </div>*/}
        <div class='aboutus-secktion paddingTB60' id='aboutus'>
          <div class='cta-sektion cta-padding35'>
            <div class='container'>
              <div class='row'>
                <div class='col-md-9 col-sm-9 col-xs-12 text-center '>
                  <h4 class='slogan'>
                    <span class='glyphicon glyphicon-cog '></span>"The future
                    depends on what you do today." <br></br>— Mahatma Gandhi
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='paddingTB60' id='contactus'>
          <section id='contact'>
            <div class='section-content'>
              <h1 class='section-header'>
                Get in
                <span
                  class='content-header wow fadeIn '
                  data-wow-delay='0.2s'
                  data-wow-duration='2s'
                >
                  Touch with us
                </span>
              </h1>
              <h4>We would love to hear from you</h4>
            </div>

            <div class='contact-section'>
              <div class='container'>
                <form>
                  <div class='row'>
                    <div class='col-md-6 form-line'>
                      <div class='form-group'>
                        <input
                          type='text'
                          class='form-control'
                          id=''
                          placeholder=' Enter Name'
                        ></input>
                      </div>
                      <div class='form-group'>
                        <input
                          type='email'
                          class='form-control'
                          id='exampleInputEmail'
                          placeholder=' Enter Email id'
                        ></input>
                      </div>
                      <div class='form-group'>
                        <input
                          type='tel'
                          class='form-control'
                          id='telephone'
                          placeholder=' Enter 10-digit mobile no.'
                        ></input>
                      </div>
                    </div>
                    <div class='col-md-6'>
                      <div class='form-group'>
                        <textarea
                          class='form-control'
                          id='description'
                          placeholder='Enter Your Message'
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type='button'
                          class='sendmsg btn btn-primary btn-lg'
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default IndexComponent;
