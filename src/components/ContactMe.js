import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import '../css/contactpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const reducer = (state, action) => {
  let data = [...state];
  switch (action.type) {
    case "name":
      data[0] = { name: action.payload };
      return data;
    case "email":
      data[1] = { email: action.payload };
      return data;
    case "subject":
      data[2] = { subject: action.payload };
      return data;
    case "message":
      data[3] = { message: action.payload };
      return data;
    default:
      return state;
  }
}

const ContactMe = () => {
  const [form, dispatch] = useReducer(reducer, [{ name: "" }, { email: "" }, { subject: "" }, { message: "" }]);

  async function sendData() {

    document.querySelector("#toast_message").innerHTML = "Thankyou for contacting me.";
    document.querySelector("#toast").style.bottom = "10%";

    try {
      let name = form[0].name;
      let email = form[1].email;
      let subject = form[2].subject;
      let message = form[3].message;


      // validation 
      if (name === "" || email === "" || subject === "" || message === "") {
        throw new Error("please Fill all the details");
      }


      const res = await axios.post("https://mrityunjaysauthsystem.herokuapp.com/portfolio_contact", {
        name, email, subject, message
      });
      console.log(res.data);

    } catch (e) {
      document.querySelector("#toast_message").innerHTML = e.message;
      document.querySelector("#toast").style.backgroundColor = 'red';
      document.querySelector("#toast").style.bottom = "10%";
      console.log("Error = ", e.message);
    }

    setTimeout(() => {
      document.querySelector("#toast").style.bottom = "-20%";
    }, 3000);
  }


  return (
    <>
      <div>

        <div style={{ position: 'relative', overflow: 'hidden', backgroundImage: 'linear-gradient(lightyellow, yellow)', width: '100%', height: '100vh' }}>

          <div id="toast" style={{ width: 'auto', zIndex: 99999, position: 'absolute', bottom: '-50%', right: '60%' }}> <h1 style={{ padding: '10%', fontSize: '2rem', color: 'white' }} id="toast_message"> Thankyou so much for contacting me. </h1> </div>


          {/* header */}
          <div className="header-div">
            <h1 style={{ textShadow: "0.2rem 0.1rem 0.5rem lightgrey" }}> Contact me </h1>
          </div>

          {/* body */}

          <div className="contact-page-main-div">
            <div className="contact-page-main-div-child-1">
              <div className="contact-form">
                <div>
                  <div className="field-title"> Name </div>
                  <div> <input type="text" value={form[0].name} onChange={(e) => { dispatch({ type: "name", payload: e.target.value }) }} /> </div>
                </div>
                <div>
                  <div className="field-title"> Email </div>
                  <div> <input type="text" value={form[1].name} onChange={(e) => { dispatch({ type: "email", payload: e.target.value }) }} /> </div>
                </div>
                <div>
                  <div className="field-title"> Subject </div>
                  <div> <input type="text" value={form[2].name} onChange={(e) => { dispatch({ type: "subject", payload: e.target.value }) }} /> </div>
                </div>
                <div>
                  <div className="field-title"> Message </div>
                  <div> <textarea value={form[3].name} onChange={(e) => { dispatch({ type: "message", payload: e.target.value }) }} > </textarea> </div>
                </div>
                <div style={{ margin: '4% 0%', display: 'flex', justifyContent: 'flex-end' }}>
                  <div style={{ width: '30%' }}> <input style={{ padding: '0.8rem', fontWeight: 'bold', backgroundColor: "brown", color: 'white' }} type="submit" value="Submit" onClick={sendData} /> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;