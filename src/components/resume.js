import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Fade}  from 'react-reveal';





const Resume = () => (
  <div className="resumeContainer">
    <Fade top >
        <h2>Mes Activités</h2>
    </Fade>
    
    <Fade left cascade>
        <div className="activityContainer">
            <div className="activityText">
                <h3>Activité 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit.</p>
            </div>
            <StaticImage src="../images/BASE.jpg" alt="activity image" className="activityImg" />
        </div>


        <div className="activityContainer">
            <StaticImage src="../images/BASE.jpg" alt="activity image" className="activityImg" />
            <div className="activityText">
                <h3>Activité 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit.</p>
            </div>
        </div>


        <div className="activityContainer">
            <div className="activityText">
                <h3>Activité 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit.</p>
            </div>
            <StaticImage src="../images/BASE.jpg" alt="activity image" className="activityImg" />
        </div>
    </Fade>

  </div>
)

export default Resume