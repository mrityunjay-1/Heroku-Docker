import React from 'react';
import '../css/myskills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faReact, faJsSquare, faNodeJs, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';

// my skills - json data
const my_skills = [
  {
    icon1: faHtml5,
    skill1: "HTML",
    value1: 80,
    icon2: faCss3Alt,
    skill2: "css",
    value2: 70
  }, {
    icon1: faJsSquare,
    skill1: "Javascript",
    value1: 75,
    icon2: faReact,
    skill2: "React Js",
    value2: 80
  }, {
    icon1: faNodeJs,
    skill1: "Node Js",
    value1: 80,
    icon2: faPhp,
    skill2: "php",
    value2: 75
  }, {
    icon1: faLaravel,
    skill1: "Laravel",
    value1: 75,
    icon2: faReact,
    skill2: "React native",
    value2: 80
  },
];

// my education - json data
const my_education = [
  {
    college_logo: "data:image/jpeg;base64,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",
    class: "Matriculation",
    percentage: "Percentage : 76.8%",
    school: "NBS Mills High School, Bagaha - Bihar",
    year: 2015
  }, {
    college_logo: "https://www.bing.com/th?id=ASxRnV%2bOKax%2bFKw480x360&pid=Local",
    class: "Intermediate in Science",
    percentage: "Percentage : 75.4%",
    school: "Munshi Singh College, Motihari - Bihar",
    year: 2017
  }, {
    college_logo: "https://www.careerindia.com/img/2014/08/28-lovelyprofessionaluniversity.jpg",
    class: "B.Tech. - (Computer Science & Engineering)",
    percentage: "CGPA : 7.43",
    school: "Lovely Professional University, Phagwara - Punjab",
    year: 2022
  }
];


const MySkills = () => {
  return (
    <>
      <div>
        <div className="myskills-main-div">
          <div className="myskills-main-div-header">
            <p style={{ textAlign: 'center', color: 'black' }} > why choose me </p> <br />
            <h1 style={{ textAlign: 'center', textShadow: "0.2rem 0.1rem 0.5rem lightgrey" }}> My Expertise Area </h1>
          </div>
          <hr style={{ margin: '1% 0%' }} />

          <div className="myskills-main-div-body">
            {/* Skills Divs */}
            {
              my_skills.map((data) => {
                return (
                  <>
                    <div className="skills-div">
                      <div style={{ fontSize: '2rem' }}>
                        <FontAwesomeIcon icon={data.icon1} /> <span> {data.skill1} </span> <span style={{ float: "right", fontSize: '1.4rem', color: 'grey' }}> {data.value1}% </span>
                        <br /> <div style={{ width: '100%', height: '1rem', border: '0.1rem solid grey', borderRadius: '2rem' }} > <div style={{ width: `${data.value1}%`, height: '100%', backgroundColor: 'green' }}></div> </div>
                      </div>
                      <div style={{ fontSize: '2.2rem' }}>
                        <FontAwesomeIcon icon={data.icon2} /> <span> {data.skill2} </span> <span style={{ float: "right", fontSize: '1.4rem', color: 'grey' }}> {data.value2}% </span>
                        <br /> <div style={{ width: '100%', height: '1rem', border: '0.1rem solid grey', borderRadius: '2rem' }} > <div style={{ width: `${data.value2}%`, height: '100%', backgroundColor: 'green' }}></div> </div></div>
                    </div>
                  </>
                );
              })
            }


            <div style={{ width: '100%', display: 'flex', flexFlow: 'column', padding: '7% 0%' }}>
              {/* My Education Heading */}

              <div style={{ width: '100%', fontSize: '1.4em' }}>
                <h1 style={{ textShadow: "0.2rem 0.1rem 0.5rem lightgrey", textAlign: 'center', color: 'brown' }}><FontAwesomeIcon icon={faGraduationCap} /> My Education </h1>
              </div>

              <hr style={{ margin: '1% 0%' }} /> <br /><br />
              {/* My Education Body */}

              <div className="my-education">
                {
                  my_education.map((data) => {
                    return (
                      <>
                        <div>
                          <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', paddingTop: '2%' }}>
                            <span style={{ borderRadius: '0.3rem', backgroundColor: 'brown', /*textShadow: '0.1rem 0.1rem 0.3rem lightgrey',*/ padding: '3%', fontSize: '2.2rem', fontWeight: 'bold', color: 'white', textAlign: 'center' }}> {data.class} </span> <br />
                            <span style={{}}> {/*<FontAwesomeIcon icon={data.icon} /> */} <img src={data.college_logo} style={{ borderRadius: '6rem', width: 'auto', height: '8rem' }} /> </span> <br />
                            <span style={{ textAlign: 'center', fontSize: '1.4rem', color: 'grey' }}> {data.school} </span> <br />
                          </div>
                          <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
                            <span style={{ fontWeight: 'bold' }}> {data.percentage} </span> <br />
                            <span style={{ fontSize: '1rem', color: 'grey' }}> {data.year} </span>
                          </div>
                        </div>
                      </>
                    );
                  })
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;