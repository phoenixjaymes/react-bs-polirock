import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Navbar,
} from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Navbar as="footer" bg="white" fixed="bottom" expand="sm" className="flex-wrap">
      <Container className="border-top pt-2">
        <nav className="nav-footer">
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/bsignup">Band Sign Up</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/rules">Contest Rules</Link>
          </div>
          <div>
            <Link to="/candidates">Presidential Candidates</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </Container>
      <p className="w-100 text-center mb-1">
        <small>{`\u00A9 ${year} PoliRock`}</small>
      </p>
    </Navbar>
  );
};

export default Footer;
