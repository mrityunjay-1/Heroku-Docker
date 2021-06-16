import React from 'react';
import '../css/myprojects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


const my_projects = [
  {
    key: "project101",
    name: "examscuriosity.com",
    discription: "A php based web application where a user can track and maintain daily based expense, a fare calculator and more stuff.",
    project_images: [
      "https://github.com/mrityunjay-1/projects-images/blob/main/examscuriosity-site-image.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/examscuriosity-site-image2.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/examscuriosity-site-image3.png?raw=true"
    ],
    technology_used: ["php", "html", "css", "javascript"],
    live_demo: "https://examscuriosity.000webhostapp.com",
    source_code: "https://github.com/mrityunjay-1",
  }, {
    key: "project102",
    name: "Weather Checker",
    discription: "Enter your city name and get the weather information right on your screen.",
    project_images: [
      "https://github.com/mrityunjay-1/projects-images/blob/main/weather-app-img-2.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/weather-app-img-1.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/weather-app-img-3.png?raw=true"
    ],
    live_demo: "https://my-weather-application2.herokuapp.com/",
    source_code: "https://github.com/mrityunjay-1/my-weather-application",
    technology_used: ["Nodejs", "Expressjs", "Handlebars", "MapBox weather API"]
  }, {
    key: "project103",
    name: "Live Chat Application",
    project_images: [
      "https://github.com/mrityunjay-1/projects-images/blob/main/live-chat-app-image2.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/live-chat-app-image3.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/live-chat-app-image1.png?raw=true"
    ],
    live_demo: "http://my-chat-application-mrityunjay.herokuapp.com/",
    source_code: "https://github.com/mrityunjay-1/my-chat-application",
    technology_used: ["Nodejs", "Expressjs", "socket.io", "Handlebars"]
  }, {
    key: "project104",
    name: "Fare Calculator",
    project_images: [
      "https://raw.githubusercontent.com/mrityunjay-1/projects-images/main/project_104_image_!.jpg",
      "https://raw.githubusercontent.com/mrityunjay-1/projects-images/main/image_2.jpg",
      "https://raw.githubusercontent.com/mrityunjay-1/projects-images/main/image_3.jpg"
    ],
    technology_used: ["node.js", "React Native"]
  }, {
    key: "project105",
    name: "Expense Tracker and Multiply calculator",
    project_images: [
      "https://raw.githubusercontent.com/mrityunjay-1/projects-images/main/project_image_1.jpg",
      "https://raw.githubusercontent.com/mrityunjay-1/projects-images/main/project_image_2.jpg",
      "https://raw.githubusercontent.com/mrityunjay-1/projects-images/main/project_image_3.jpg"
    ],
    technology_used: ["node.js", "React Native"]
  }
];

const MyProjects = () => {

  return (
    <>
      <div className="my-projects-main-div">
        {/* header */}
        <div className="my-projects-main-div-header">
          <h1 style={{ textShadow: "0.1rem 0.1rem 0.5rem lightgrey" }}> My Projects </h1>
        </div>
        {/* body */}
        <div className="my-projects-main-div-body">
          {
            my_projects.map((data) => {
              return (
                <>
                  <div class="project-card">
                    <div class="project-image-container">
                      {
                        data.project_images.map(image => <img src={image} style={{ width: '100%', height: '100%' }} />)
                      }
                    </div>
                    <div class="project-data-container">
                      <h1 style={{}}> {data.name} </h1>
                      <p style={{ fontSize: '1.4rem', padding: '2% 0%' }}> {data.discription} </p>
                      <div class="technology-used" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                          data.technology_used.map((technology) => <h3 style={{ borderRadius: '0.5rem', padding: '1%', backgroundColor: 'lightgrey', margin: '0.5% 0.5%' }}> {technology} </h3>)
                        }
                      </div>
                      <div className="outside-links" style={{ marginTop: '2%' }}>
                        {
                          data.live_demo !== undefined ?
                            <a target="_blank" style={{ textDecoration: 'none', color: 'black' }} href={data.live_demo} > <span style={{ padding: '1.5% 5%', backgroundColor: 'lightgrey', margin: '0% 0.5%' }}> Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} /> </span> </a>
                            :
                            ""}
                        <a target="_blank" style={{ textDecoration: 'none', color: 'black' }} href={data.source_code} > <span style={{ padding: '1.5% 5%', backgroundColor: 'lightgrey', margin: '0% 0.5%' }}> Source Code <FontAwesomeIcon icon={faGithub} /> </span> </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          }
        </div>
      </div>
      <div style={{ display: 'flex', padding: '2% 0%', backgroundColor: '#e6e6e6' }}>
        <a style={{ textDecoration: 'none', textAlign: 'center', fontSize: '1.6rem', width: '100%' }} href="https://github.com/mrityunjay-1" alt="my_github_link"> But that's not all, find some more here  <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2rem' }} /> </a>
      </div>
    </>
  );
}

export default MyProjects;