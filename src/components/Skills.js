import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import plogo1 from '../assets/img/plogo1.png'
import plogo2 from '../assets/img/plogo2.png'
import plogo3 from '../assets/img/plogo3.png'
import plogo4 from '../assets/img/plogo4.png'
import plogo5 from '../assets/img/plogo5.png'
import plogo6 from '../assets/img/plogo6.png'
import plogo7 from '../assets/img/plogo7.png'
import plogo8 from '../assets/img/plogo8.png'
import plogo9 from '../assets/img/plogo9.png'
import plogo10 from '../assets/img/plogo10.png'
import plogo11 from '../assets/img/plogo11.png'
import colorSharp from '../assets/img/color-sharp.png'



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

  return (
    <section className='skills' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>
                        Skills
                    </h2>
                    <p>
                        I practice Frontend, Backend, Databse and Server side Development
                        <br/>
                        <br/>
                        using the following programming languages & technologies:
                    </p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={plogo1} alt='LogoReact' />
                            <h5>React</h5>
                        </div>
                        <div className='item'>
                            <img src={plogo2} alt='LogoRedux' />
                            <h5>Redux</h5>
                        </div>
                        <div className='item'>
                            <img src={plogo3} alt='LogoAngular' />
                            <h5>Angular</h5>
                        </div>
                        <div className='item'>
                            <img src={plogo4} alt='LogoPython' />
                            <h5>Python</h5>
                        </div>
                        <div className='item'>
                            <img src={plogo5} alt='LogoJS' />
                            <h5>JavaScript</h5>
                        </div>
                        <div className='item'>
                            <img src={plogo6} alt='LogoTS' />
                            <h5>TypeScript</h5>
                        </div>
                        <div className='item'>
                            <img src={plogo7} alt='LogoDjango' />
                            <h5>Django</h5>
                        </div>
                        <div className='item'>
                            <img src={plogo8} alt='LogoHMTL' />
                            <h5>HTML</h5>
                        </div>
                        <div className='item'>
                            <img src={plogo9} alt='LogoCSS' />
                            <h5>CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={plogo10} alt='LogoNode.js' />
                            <h5>Node.js</h5>
                        </div>
                        <div className='item'>
                            <img src={plogo11} alt='LogoBootstrap' />
                            <h5>Bootstrap</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} alt='skills colorsharp'/>
    </section>
  )
}

export default Skills