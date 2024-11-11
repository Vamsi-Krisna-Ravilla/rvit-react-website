import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { FaUniversity, FaAward, FaStar, FaFlask, FaLightbulb, FaCertificate } from 'react-icons/fa';
import './Home.css';
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";

function Home() {
  const achievements = [
    { icon: <FaAward />, title: "AICTE Approved", description: "New Delhi Recognition" },
    { icon: <FaCertificate />, title: "JNTU Affiliated", description: "Permanent Affiliation" },
    { icon: <FaStar />, title: "NAAC 'A' Grade", description: "Autonomous Institution" },
    { icon: <FaFlask />, title: "SIRO Recognition", description: "DSIR, Government of India" },
    { icon: <FaLightbulb />, title: "MSME Certified", description: "Incubation Center" },
    { icon: <FaCertificate />, title: "UGC Certified", description: "2(f) and 12(B) Status" }
  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col xs={12} className="text-center">
              <h1 className="heading">
                Welcome to <strong className="main-name">RVIT</strong>{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🎓
                </span>
              </h1>
              <span className="subheading"> (Formerly Chebrolu Engineering College)</span>
              <div className="type-section">
                <Type />
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mt-4">
            <Col lg={7} md={12} className="order-2 order-lg-1 d-flex justify-content-center align-items-center p-3">
              <div className="college-info-card">
                <h2 className="info-title">
                  <FaUniversity className="title-icon" />
                  Excellence in Education Since 2008
                </h2>
                <p className="college-intro">
                  RV Institute of Technology (RVIT), established by Dr. R. Venkata Krishnaiah, stands as a beacon of educational excellence under the Sri Visweswaraiah Educational Society.
                </p>
                <div className="pillars-container">
                  {achievements.map((achievement, index) => (
                    <div className="pillar" key={index}>
                      <div className="icon-wrapper">
                        {achievement.icon}
                      </div>
                      <h3 className="pillar-title">
                        {achievement.title}
                      </h3>
                      <p className="pillar-description">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="vision-statement">
                  Join us on a journey where education transcends boundaries, nurturing every student's potential to its fullest.
                </p>
              </div>
            </Col>
            <Col lg={5} md={12} className="order-1 order-lg-2 mb-4 mb-lg-0 text-center">
              <div className="logo-container">
                <img
                  src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  // src="https://www.imghippo.com/i/rrWA7260tV.png"
                  alt="RVIT logo"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home3 />
      {/* <Home2 /> */}
      <Home4/>
      <Home5/>
    </section>
  );
}

export default Home;