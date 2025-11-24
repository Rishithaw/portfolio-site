import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GithubIcon from '../../assets/socials/Github.png';
import LinkedInIcon from '../../assets/socials/LinkedIn.jpg';

const FooterContainer = styled.footer`
  background: #ffffff;
  color: #000000ff;
  text-align: center;
  padding: 30px 20px;
  margin-top: 50px;
`;

const Nav = styled.nav`
  margin: 10px 0 20px 0;

  a {
    margin: 0 12px;
    color: #ccc;
    font-size: 0.95rem;
    text-decoration: none;

    &:hover {
      color: #007bff;
    }
  }
`;

const Contact = styled.div`
  margin-top: 10px;

  p {
    margin: 3px 0;
  }

  a {
    color: #00b7ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Socials = styled.div`
  margin-top: 15px;

  img {
    width: 38px;
    height: 38px;
    margin: 0 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Rishitha Wickramasinghe. All rights reserved.</p>

      {/* Main Footer Navigation */}
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/dev-setup">Developer Setup</Link>
      </Nav>

      {/* Contact Info */}
      <Contact>
        <p>📍 Winnipeg, Canada</p>
        <a href="mailto:rishithaw1@gmail.com">rishithaw1@gmail.com</a>
      </Contact>

      {/* Social Icons */}
      <Socials>
        <a
          href="https://github.com/Rishithaw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/rishitha-wickramasinghe-93442b324/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>
      </Socials>
    </FooterContainer>
  );
};

export default Footer;
