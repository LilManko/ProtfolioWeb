import { useState, useEffect} from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap' 
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.png';
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, sescrolled] = useState(false);

useEffect(() => {
    const onScroll = () =>{
        if (window.scrollY > 50){
            sescrolled(true);
        } else {
            sescrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
}, [])

const onUpdateActiveLink = (value) => {
  setActiveLink(value)
}

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/yonatan-rotman-54067a169'><img src={navIcon1} alt="LinkedIn Icon"/></a>
              <a href='https://www.facebook.com/yonirotman159'><img src={navIcon2} alt="Facebook Icon"/></a>
              <a href='https://www.instagram.com/yonirotman159/'><img src={navIcon3} alt="Injstagram Icon"/></a>
              <a href='https://github.com/LilManko'><img src={navIcon4} alt="Github Icon"/></a>
            </div>
            <a href='https://drive.google.com/file/d/1Prju29rgtG_Q5O6iqNwn-RRqrtAwd6pC/view?usp=sharing'>
              <button className='vvd'><span>My Resume</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </Router>
  )
}
