import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineTeam,
  AiOutlineEnvironment,
} from "react-icons/ai";
import logo from "../Assets/rvitlogo_f.jpg";
import './NavBar.css';

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => setExpand(!expand);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={`navbar ${navColour ? "bg-dark" : "bg-purple"} navbar-dark`}
    >
      <Container fluid className="d-flex justify-content-between align-items-center px-4">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="RVIT Logo"
            className="rounded-circle me-3"
            style={{ width: "50px", height: "50px" }}
          />
          <div>
            {/* <h1 className="h4 mb-0 text-white">RV Institute of Technology</h1> */}
            <h1 style={{ fontFamily: '"Times New Roman", Times, serif' ,color:'yellow'}}>
              <strong >RV Institute of Technology</strong>
            </h1>                
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto custom-nav">
            <NavDropdown title={<><AiOutlineUser /> About</>} id="about-dropdown">
              <NavDropdown.Item as={Link} to="/college-overview">College Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vision-mission">Vision & Mission</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/management">Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/principal">Principal's Desk</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recognitions">Recognitions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/administration">Administration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rti">RTI</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mandatory-disclosure">Mandatory Disclosure</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/approvals">Approvals</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/committees">Committees</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<><AiOutlineBook /> Academics</>} id="academics-dropdown">
              <NavDropdown.Item as={Link} to="/curriculum">Curriculum & Syllabus</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/calendar">Academic Calendar</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/iqac">IQAC</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/obe">Outcome-Based Education (OBE)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/value-added-courses">Value Added Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown title="Departments" id="departments-dropdown" className="nested-dropdown">
                <NavDropdown.Item as={Link} to="/cse">Computer Science and Engineering</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cse-aiml">CSE (AI & ML)</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cse-ds">CSE (Data Science)</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ece">Electronics and Communication</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/vlsi-ect">Electronics (VLSI Design)</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/eee">Electrical and Electronics</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mech">Mechanical Engineering</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/civil">Civil Engineering</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/fresher">Freshman Engineering</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mca">MCA</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mba">MBA</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown title="Examinations" id="examinations-dropdown" className="nested-dropdown">
                <NavDropdown.Item as={Link} to="/exam-cell-structure">Exam Cell Structure</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/exam-notifications">Exam Notifications</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/study-material">Study Materials</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/previous-papers">Previous Papers</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/results">Results</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/student-verification">Student Verification</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/annual-reports">Annual Report</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/exam-form-download">Exam Form Download</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/fee-payments">Fee Payments</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            <NavDropdown title={<><AiOutlineTeam /> Admission</>} id="admission-dropdown">
              <NavDropdown.Item as={Link} to="/admission-procedure">Admission Procedure</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/programs-and-courses">Programs & Courses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fee-structure">Fee Structure</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/scholarships">Scholarships</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<><AiOutlineTeam /> Students</>} id="students-dropdown">
              <NavDropdown.Item as={Link} to="/student-fee-payment">Student Fee Payment</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/student-centric-methods">Student Centric Methods</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/student-clubs">Student Clubs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/online-grievance">Online Grievance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/feedback">Feedback</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/student-services">Student Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/assignments">Assignments</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<><AiOutlineEnvironment /> Campus</>} id="campus-dropdown">
              <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/infrastructure">Infrastructure</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/social-responsibilities">Social Responsibilities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/virtual-tour-360">Virtual Tour 360</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/others">Others</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown title="Placements" id="placements-dropdown" className="nested-dropdown">
                <NavDropdown.Item as={Link} to="/training-and-placement-cell">Training and Placement Cell</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tpo-and-team">TPO & Team</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/companies-visited">Companies Visited</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/placement-notifications">Placement Notifications</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/placement-stats">Placement Stats</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/placement-material">Placement Material</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown title="Research" id="research-dropdown" className="nested-dropdown">
                <NavDropdown.Item as={Link} to="/research-and-development">Research and Development</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/incubation-center">Incubation Centre</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mous">MOUs</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/international-conferences">International Conferences</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/patents">IPR</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sponsored-projects">Sponsored Projects</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/research-publications">Publications</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;