import React from "react";
import "../css/About.css";
import  Instagram  from "@mui/icons-material/Instagram";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn  from "@mui/icons-material/LinkedIn"; 
const About = () => {
  return (
    <div className="about-container">
      <div className="pattern-overlay"></div>
      <div className="about-content">
        {/* <h1 className="aboutus">About us</h1> */}
        <p className="aboutd">Welcome to our company! We are a team of dedicated professionals...</p>

        <div className="owners">
          <div className="owner">
            <h2>Vigneshwar</h2>
            <p className="foun">Co-founder & TFO</p>
            <div className="social-links">
              <div className="insta">
               <Instagram id="instagram">
                </Instagram>
              </div>
              <div className="git">
              <GitHub id="github">
              </GitHub>
              </div>
              <div className="link">
                <LinkedIn id="linkedin">
                </LinkedIn>
              </div>
            </div>
          </div>

          <div className="owner">
            <h2>Venu Prasath</h2>
            <p> Co-founder & CEO</p>
            <div className="social-links">
            <div className="insta">
                <Instagram id="instagram">
                  
                </Instagram>
              </div>
              <div className="git">
              <GitHub id="github">
              </GitHub>
              </div>
              <div className="link">
                <LinkedIn id="linkedin">
                </LinkedIn>
              </div>
            </div>
          </div>

          <div className="owner">
            <h2>Yogesh</h2>
            <p>Co-founder & CFO</p>
            <div className="social-links">
            <div className="insta">
                <Instagram id="instagram">
                  
                </Instagram>
              </div>
              <div className="git">
              <GitHub id="github">
              </GitHub>
              </div>
              <div className="link">
                <LinkedIn id="linkedin">
                </LinkedIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
