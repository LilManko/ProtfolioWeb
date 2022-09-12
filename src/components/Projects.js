import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React from 'react'
import { ProjectCards } from "./ProjectCards";
import PrintsAndPots from "../assets/img/PrintsAndPots1.png";
import comingsoon1 from "../assets/img/comingsoon1.png";
import comingsoon2 from "../assets/img/comingsoon2.png";
import comingsoon3 from "../assets/img/comingsoon3.png";
import comingsoon4 from "../assets/img/comingsoon4.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export  const Projects = () => {

  const projects = [
    {
      title: "Prints & Pots",
      description: "E-Commerce Web App - In Development",
      imgUrl: PrintsAndPots,
      alt: "PrintsnPots",
      gitUrl: "#projects",
      liveUrl: "#projects",
    },
    {
      title: "My Protfolio",
      description: "My Personal Profolio App",
      imgUrl: projImg2,
      alt:"MyProtfolio",
      gitUrl: "https://github.com/LilManko/ProtfolioWeb",
      liveUrl: "#projects",
      
    },
    {
      title: "Stay Tuned...",
      description: "",
      imgUrl: comingsoon1,
      alt:"Prints n Pots",
      gitUrl: "#projects",
      liveUrl: "#projects",
    },
    {
      title: "Stay Tuned...",
      description: "",
      imgUrl: comingsoon2,
      alt:"Prints n Pots",
      gitUrl: "#projects",
      liveUrl: "#projects",
    },
    {
      title: "Stay Tuned...",
      description: "",
      imgUrl: comingsoon3,
      gitUrl: "#projects",
      liveUrl: "#projects",
    },
    {
      title: "Stay Tuned...",
      description: "",
      imgUrl: comingsoon4,
      alt:"Prints n Pots",
      gitUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <h2>Projects</h2>
          <p></p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row>
                {
                  projects.map((project, index) => {
                    return(
                      <ProjectCards
                      key={index}
                      {...project}
                      />
              
                    )
                  })
                }
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">Comming Soon...</Tab.Pane>
            <Tab.Pane eventKey="third">Comming Soon...</Tab.Pane>
          </Tab.Content>
          </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background image2"></img>
    </section>
  )
}

export default Projects