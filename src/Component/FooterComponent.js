import React from "react";

class FooterComponent extends React.Component {
  render() {
    return (
      <div className='footer'>
        <footer id='sticky-footer' class='py-4 bg-dark text-white-50'>
          <div class='container text-center'>
            <small>Copyright @ 2020. All rights reserved.</small>
          </div>
        </footer>
      </div>
    );
  }
}
export default FooterComponent;
