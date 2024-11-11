import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './App.css'; // Assuming you will save the CSS as App.css

function HomePage() {
  return (
    <Container fluid>
      <AnnouncementBanner />
      <ImageCarousel />
      <AboutSection />
      <NewsEvents />
      <Programs />
      <IncubationCenter />
      <MapSection />
    </Container>
  );
}

function AnnouncementBanner() {
  return (
    <div className="announcement-banner">
      <div className="announcement-content">
        <span className="blink">🔔</span>
        <span className="highlight">ADMISSIONS OPEN 2024</span>
        for B.TECH / M.TECH / BCA / MCA / DIPLOMA
        <span className="contact-badge">
          <i className="fas fa-phone-alt"></i>
          Contact Us: 9951222238,48,68
        </span>
        <span className="highlight">Limited Seats Available!</span>
        <span className="blink">📚</span>
      </div>
    </div>
  );
}

function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="img/index admissions open.png" alt="Admissions Open" />
        <Carousel.Caption>
          <h3>Admissions Open</h3>
          <p>Join our prestigious institution for academic excellence</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="img/explore programmes1 index.png" alt="Explore Programs" />
        <Carousel.Caption>
          <h3>Explore Programs</h3>
          <p>Discover our wide range of academic programs</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more items as needed */}
    </Carousel>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="about-image">
              <img src="img/rvit logo.jpg" alt="RV Institute of Technology" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <h1 className="section-title">Welcome to RV Institute of Technology</h1>
              <p>RV Institute of Technology (RVIT), established in 2008 by Dr. R.Venkata krishnaiah, stands as a premier self-financed institute under the Sri Visweswaraiah Educational Society.</p>
              <ul>
                <li>AICTE approval from New Delhi</li>
                <li>Permanent affiliation with JNTU Kakinada</li>
                <li>Autonomous Institution status with NAAC 'A' grade</li>
                <li>Recognition as SIRO by DSIR, GoI</li>
                <li>MSME-certified Incubation center</li>
                <li>UGC 2(f) and 12(B) certifications</li>
              </ul>
              <p>Join Us on the Journey</p>
              <p>RVIT is more than an institution – we're a community fostering intellectual curiosity, creativity, and innovation. Our dynamic environment shapes future-ready leaders through transformative learning experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsEvents() {
  return (
    <section className="news-section">
      <div className="container">
        <h2>Latest News & Events</h2>
        <div className="news-carousel">
          <div className="news-card">
            <img src="img/msme.jpeg" alt="MSME Hackathon" />
            <h3>MSME – Idea Hackathon</h3>
            <a href="news.php" className="btn btn-primary">View Details</a>
          </div>
          <div className="news-card">
            <img src="img/Coding Club_pic.png" alt="RVIT Coding Club Hackathon Winners" />
            <h3>RVIT Coding Club Hackathon Winners</h3>
            <a href="news.php" className="btn btn-primary">View Details</a>
          </div>
          {/* Add more news items as needed */}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="programs-section">
      <div className="container">
        <h1 className="section-title">Explore Our Programmes</h1>
        <div className="row">
          <div className="col">
            <div className="program-card">
              <img src="img/btech index.jpg" alt="B.Tech Program" />
              <h3>Bachelor of Technology</h3>
              <p>Pursue a rewarding engineering career with our accredited B.Tech programs.</p>
              <a href="curriculumandsyllabus.php" className="read-more-btn">Read More</a>
            </div>
          </div>
          <div className="col">
            <div className="program-card">
              <img src="img/mtech index.jpg" alt="M.Tech Program" />
              <h3>Master of Technology</h3>
              <p>Advance your knowledge and expertise with our specialized M.Tech programs.</p>
              <a href="curriculumandsyllabus.php" className="read-more-btn">Read More</a>
            </div>
          </div>
          {/* Add more programs as needed */}
        </div>
      </div>
    </section>
  );
}

function IncubationCenter() {
  return (
    <section className="incubation-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1>Welcome to RVIT Incubation Center</h1>
            <p>Dive into a world of innovation and entrepreneurship at RVIT's Incubation Center. We're here to empower aspiring entrepreneurs like you by providing access to a network of mentors, investors, and resources.</p>
            <a href="incubationcenter.php" className="btn btn-primary">Discover Our Projects</a>
          </div>
          <div className="col-lg-5">
            <img src="img/incubation center index.jpg" alt="Incubation Center" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="map-section">
      <div className="container">
        <div className="map-container">
          <div className="map-overlay">
            <h3>Find Us</h3>
            <p>RV Institute of Technology</p>
            <p>Formerly Chebrolu, Guntur District</p>
            <p>+91 9951222238,48,68</p>
            <p>principal@rvit.edu.in</p>
          </div>
          <iframe
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.3390864019766!2d80.51772227390954!3d16.20299821639884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0df69725897f%3A0xd11124d5323612be!2sRV%20Institute%20of%20Technology%20UGC%20Autonomous!5e0!3m2!1sen!2sin!4v1716311378755!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="map-controls">
            <a href="https://goo.gl/maps/YOUR_MAPS_LINK" target="_blank" className="map-button">
              Get Directions
            </a>
            <button className="map-button" onClick={() => window.open('tel:9951222268')}>
              Call Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;