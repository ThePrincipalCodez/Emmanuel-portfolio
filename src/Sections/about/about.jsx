import "./about.css";
// import Downloadbutton from "../../Components/buttons/downloadbutton";

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
                  <h2 style={{ color: "#fff" }}> Engr. Emmanuel D. Odefadehan</h2>
                  <h4 >
                    Project Coordination And Management  | Operations Efficiency And 
                    Management | Business Sustainability
                  </h4>
                </div>
                <p className="section-content">
                  {/* Engr. Emmanuel Odefadehan, PMP® Engineering Manager | Project
                  Management Professional Engr.  */}
                  Emmanuel Odefadehan is an accomplished engineering manager and
                  project management professional with extensive experience in
                  technical operations and project execution. With a solid
                  background in mechanical engineering and business
                  administration, he brings a multidisciplinary approach to
                  every project, ensuring seamless integration of engineering
                  principles with business objectives.
                </p>
                <p className="section-content">
                  Emmanuel's expertise spans a wide range of areas, including
                  feasibility studies, site layout design, budgeting, schedule
                  preparation, resource allocation, and the installation and
                  maintenance of machines, equipment, and racking systems.
                </p>
                <br />
                {/* <Downloadbutton /> */}
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
        <br />
        <br />
        <p className="section-content section-subtext ">
          His ability to deliver projects on time and within budget, while
          upholding high standards of quality and efficiency, has been a
          hallmark of his career. At Karbak Ventures Limited, Emmanuel has
          consistently demonstrated his leadership by managing complex technical
          projects involving cross-functional teams and multiple vendors. Under
          his guidance, his teams have achieved an average of 99.3% quality KPI
          scores and surpassed budget targets by up to 49%. He is also credited
          with the development and implementation of standard operating
          procedures and process maps that have significantly reduced work-cycle
          durations.
        </p>
        <br />

        <p className="section-content section-subtext ">
          In addition to his technical acumen, Emmanuel is skilled in policy and
          procedure development, the implementation of new technologies, and
          effective team supervision. His technical writing capabilities ensure
          accurate and comprehensive documentation, which is crucial for
          maintaining high standards and continuous improvement in all project
          phases. Known for his strong leadership skills and commitment to
          excellence, Emmanuel is passionate about optimizing operational
          efficiency and delivering superior project outcomes. His dedication to
          fostering collaborative work environments and inspiring teams has made
          him a valuable asset to every organization he has served. Emmanuel
          holds a Bachelor of Engineering in Mechanical Engineering from
          Covenant University and a Master of Business Administration from
          Nexford University. His professional certifications include Project
          Management Professional (PMP®), ISO 9001:2015 Quality Management, and
          Occupational Health & Safety certifications by (AOSH and OSHA). He is
          a registered member of The Council for the regulation of Engineering
          in Nigeria (COREN) , The Nigerian Society of Engineers (NSE) and
          Project Management Institute (PMI).
        </p>
      </div>
    </div>
  );
}
