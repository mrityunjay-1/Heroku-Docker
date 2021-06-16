import React from 'react';
import '../css/aboutmepage.css';

const AboutMe = () => {
  return (
    <>
      <div className="aboutme-main-div" >
        {/* animated backgrounds using css animations */}
        <div className="background-image"></div>

        {/* div child - 1 */}
        <div className="aboutme-main-div-child-1">
          <div className="header">
            <h1> About me </h1>
          </div>
          <div className="body">
            <p>
              Hello, I am Mrityunjay Kumar. A full stack web Developer. Having good command on Javascript from
              front-end to back-end. I program that just not about solving any problem but also solving the community
              challenges through programming. Apart from all these web development i can develop native applications
              through React Native and android.
            </p>
          </div>
        </div>

        {/* div child - 2 */}
        <div className="aboutme-main-div-child-2">

        </div>

      </div>
    </>
  );
}

export default AboutMe;