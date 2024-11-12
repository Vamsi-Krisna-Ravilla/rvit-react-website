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
        <div className="glow-overlay"></div>
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col xs={12} className="text-center">
              <h1 className="heading glow-text">
                Welcome to <strong className="main-name glow-text-strong">RVIT</strong>{" "}
                <span className="wave glow-emoji" role="img" aria-labelledby="wave">
                  🎓
                </span>
              </h1>
              <span className="subheading glow-text-yellow">
                (Formerly Chebrolu Engineering College)
              </span>
              <div className="type-section">
                <Type />
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mt-4">
            <Col lg={7} md={12} className="order-2 order-lg-1 d-flex justify-content-center align-items-center p-3">
              <div className="college-info-card glow-card">
                <h2 className="info-title glow-text-orange">
                  <FaUniversity className="title-icon" />
                       Excellence in Education Since 2008
                </h2>
                <p className="college-intro glow-text-white">
                  RV Institute of Technology (RVIT), established by Dr. R. Venkata Krishnaiah, stands as a beacon of educational excellence under the Sri Visweswaraiah Educational Society.
                </p>
                <div className="pillars-container">
                  {achievements.map((achievement, index) => (
                    <div className="pillar glow-pillar" key={index}>
                      <div className="icon-wrapper glow-icon">
                        {achievement.icon}
                      </div>
                      <h3 className="pillar-title glow-text-white">
                        {achievement.title}
                      </h3>
                      <p className="pillar-description">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="vision-statement glow-text-cyan">
                  Join us on a journey where education transcends boundaries, nurturing every student's potential to its fullest.
                </p>
              </div>
            </Col>
            <Col lg={5} md={12} className="order-1 order-lg-2 mb-4 mb-lg-0 text-center">
              <div className="logo-container glow-border">
                <img
                  src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="RVIT logo"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home3 />
      <Home4/>
      <Home5/>
    </section>
  );
}

export default Home;