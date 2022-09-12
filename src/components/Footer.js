import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href='https://www.linkedin.com/in/yonatan-rotman-54067a169'><img src={navIcon1} alt="LinkedIn Icon"/></a>
              <a href='https://www.facebook.com/yonirot'><img src={navIcon2} alt="Facebook Icon"/></a>
              <a href='https://www.instagram.com/yonirotman159/'><img src={navIcon3} alt="Injstagram Icon"/></a>
              <a href='https://github.com/LilManko'><img src={navIcon4} alt="Github Icon"/></a>
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
