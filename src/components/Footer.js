import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import styled from "styled-components";

// Styled Components
const FooterContainer = styled(Container)`
  background-color: #1a1a1a;
  color: white;
  padding: 2rem 0;
`;

const FooterContent = styled(Row)`
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterSection = styled(Col)`
  padding: 1rem;

  h4 {
    margin-bottom: 1.2rem;
    color: #fff;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

const FooterIcons = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

const SocialIcon = styled.li`
  a {
    font-size: 1.5rem;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const FooterBottom = styled(Row)`
  padding-top: 1rem;
  text-align: center;
`;

const FooterCopyright = styled(Col)`
  font-size: 0.9rem;
`;

const SupportLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterContainer fluid>
      <FooterContent>
        <FooterSection md="4">
          <h4>Contact Us</h4>
          <p>Email: principal@rvit.edu.in</p>
          <p>Phone: 9951222238,48,68</p>
          <p>Address: RV Institute of technology (Formerly Chebrolu Engineering College), Near Power Station,Chebrolu(Vi&Md),Guntur Dst,AP,522212</p>
        </FooterSection>
        <FooterSection md="4">
          <h4>Quick Links</h4>
          <FooterLinks>
            <li><a href="/about">About Us</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/resources">Student Resources</a></li>
          </FooterLinks>
        </FooterSection>
        <FooterSection md="4">
          <h4>Connect With Us</h4>
          <FooterIcons>
            <SocialIcon>
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <AiOutlineTwitter />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://www.youtube.com/@RVIT-Autonomous"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <AiFillYoutube />
              </a>
            </SocialIcon>
          </FooterIcons>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterCopyright md="6">
          <p>© {year} Institution Name. All Rights Reserved.</p>
        </FooterCopyright>
        <Col md="6">
          <SupportLink href="/support">
            <BiSupport /> Support Center
          </SupportLink>
        </Col>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;