import "./about.css";
import Downloadbutton from "../../Components/buttons/downloadbutton";

export default function About() {
  return (
    <div className="main-wrapper" id="about">
      <div className="line"> </div>

      <div className="sub-container">
        <div className="about-wrapper">
          <div className="about-upper">
            <h1 className="section-header-text">About</h1>
            <div className="text-image-wrapper">
              <div className="first-text-section">
                <div className="header-texts">
                  <h3> Hello, I'm </h3>
                  <h1> Emmanuel Odefadehan .</h1>
                </div>

                <p className="section-content">
                  I am a graduate of Covenant University. I am professional with
                  a comprehensive experience in Engineering, Operations, and
                  Project Management. Skilled in leading diverse teams across
                  multiple engineering disciplines - equipment installation,
                  racking system installation - achieving remarkable targets and
                  driving innovation. I have proven track record as a Project
                  Manager in various projects, delivering results ahead of
                  schedule and implementing cost-saving initiatives safely. I am
                  committed to fostering growth and sustainability through
                  strategic leadership. 
                </p>
                <Downloadbutton />
              </div>
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/DP.png"}
            alt="wiz-img"
            width={500}
            height={450}
            className="about-image"
          />
        </div>

        <p className="section-content section-subtext ">
        I am eager to leverage these management
                  skills in challenging roles that demand strategic oversight,
                  innovative thinking, and exceptional project execution. As a
                  registered Engineer with COREN and certified PMP®, I am
                  looking for opportunities to contribute significantly to
                  complex projects and enhance operational efficiency.
          <br />
          <br />
          Engr. Emmanuel D. Odefadehan

MBA (US), PMP®, R. Engr(COREN), MNSE, B.ENG.


Project Coordination and Management, Operations Efficiency and Management, Business Sustainability.
          <br />
          <br />
          Cheers!
        </p>
      </div>
    </div>
  );
}
