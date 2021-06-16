import React from 'react';
import MySkills from './MySkills';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';

import myimage from '../images/my_profile_img.png';
import '../css/homepage.css';
import cv from '../images/Mrityunjay_Kumar.pdf';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const HomePage = () => {

  const get_my_resume = () => {
    try {
      axios.get(cv, { responseType: 'blob' })
        .then(res => {
          const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));

          let a = document.createElement("a");
          a.setAttribute("href", url);
          a.setAttribute("download", "cv-mrityunjay-kumar.pdf");

          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);

        });
    } catch (e) {
      // console.log(e);
    }
  }


  return (
    <>
      <div className="homepage-main-div">
        {/* top svg */}
        <div class="my-svg2" id="svgid"></div>
        {/* bottom one */}
        <div class="my-svg" id="svgid">
          <div>
            <a href="mailto:kumarmrityunjay7034@gmail.com?Subject=Project" style={{ padding: '4%' }} target="_blank"> <FontAwesomeIcon style={{ padding: '2%', fontSize: '3.5rem' }} icon={faEnvelope} /> </a>
            <a href="https://github.com/mrityunjay-1" style={{ padding: '4%' }} target="_blank"> <FontAwesomeIcon style={{ padding: '2%', fontSize: '3.5rem' }} icon={faGithub} /> </a>
            <a href="https://www.linkedin.com/in/mrityunjay-kumar-a42908151" style={{ padding: '4%' }} target="_blank"> <FontAwesomeIcon style={{ padding: '2%', fontSize: '3.5rem' }} icon={faLinkedin} /> </a>
            <a href="https://twitter.com/Mrityun69724268?s=09" style={{ padding: '4%' }} target="_blank"> <FontAwesomeIcon style={{ padding: '2%', fontSize: '3.5rem' }} icon={faTwitterSquare} /> </a>
          </div>
        </div>
        <div className="homepage-main-div-child-1">

          <div className="center">
            <img src={myimage} style={{ backgroundColor: 'white', border: '0.5rem solid lightgrey', borderRadius: '10rem', width: '50%', filter: "drop-shadow(1px 1px 10px grey)" }} /> <br />
          </div>

          <div className="homepage-main-div-child-1-child-2">
            <div style={{ minWidth: '38rem', padding: '4%', borderRadius: '0 1rem 1rem 0', borderLeft: '0.6rem solid brown', backgroundColor: 'rgba(255, 255, 255' }}>
              <p style={{ color: 'white', fontSize: '1.2rem', color: 'grey' }}> Hello, I am </p>
              <h1 style={{ color: 'brown', fontSize: '4rem' }}> Mrityunjay Kumar </h1>
            </div>
            <div></div>

            <div className="resume-button-container">
              <button className="resume-button" onClick={get_my_resume}> <span className="resume-text"> Resume </span> <span>&nbsp;  </span></button>
              <div className="resume-icon" onClick={get_my_resume}> <FontAwesomeIcon icon={faDownload} /> </div>
            </div>
          </div>
        </div>
      </div>

      <AboutMe />
      <MySkills />
      <MyProjects />
      <ContactMe />
    </>
  );
};

export default HomePage;