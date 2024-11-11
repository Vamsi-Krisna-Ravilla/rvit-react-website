import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import logo from "../Assets/rvitlogo_f.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./NavBar.css"; // Import custom CSS

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      expand="lg"
      fixed="top"
      className={`navbar ${navColour ? "bg-dark" : "bg-purple"} navbar-dark`}
    >
      <Container fluid className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={logo} alt="RVIT Logo" className="rounded-circle me-3" style={{ width: "50px", height: "50px" }} />
          <div>
            <h1 className="h5 mb-0 text-white">RV Institute of Technology</h1>

          </div>
        </div>
        <Navbar.Toggle
          aria-controls="navbarCollapse"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <i className="fas fa-bars" style={{ color: "white" }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto">
            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item as={Link} to="/collegeov">College Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/visionandmission">Vision & Mission</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/management">Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/principal">Principal's Desk</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recognitions">Recognitions</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academics" id="academics-dropdown">
              <NavDropdown.Item as={Link} to="/curriculumandsyllabus">Curriculum & Syllabus</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/academiccalender">Academic Calendar</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/iqac">IQAC</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/obe">Outcome-Based Education (OBE)</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Admissions" id="admissions-dropdown">
              <NavDropdown.Item as={Link} to="/admissionprocedure">Admission Procedure</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/programsandcourses">Programs & Courses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/feestructure">Fee Structure</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Departments" id="departments-dropdown">
              <NavDropdown.Item as={Link} to="/cse">Computer Science and Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ece">Electronics and Communication</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/eee">Electrical and Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mech">Mechanical Engineering</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Research" id="research-dropdown">
              <NavDropdown.Item as={Link} to="/researchanddevelopment">Research and Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/incubationcenter">Incubation Centre</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mous">MOUs</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;