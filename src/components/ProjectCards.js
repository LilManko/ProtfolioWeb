import React from 'react'
import { Col } from 'react-bootstrap'

export const ProjectCards = ({title, description, imgUrl, alt, gitUrl, liveUrl}) => {
  
  
  
    return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt={alt}/>
            <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>

            <div>
                <a href={gitUrl}><button className='proj-btn-git'>GitHub</button></a>
                <a href={liveUrl}><button className='proj-btn-live'>LiveSite</button></a>
            </div>
            
            </div>
        </div>
    </Col>
  )
}

export default ProjectCards