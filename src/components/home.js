import React from "react"
import { Fade, Bounce } from 'react-reveal';
import { ParallaxBanner } from 'react-scroll-parallax';
import { StaticImage } from "gatsby-plugin-image"


const Home = () => (
  <div>
    <ParallaxBanner
      className="homeContainer"
      layers={[
          {
            children: <StaticImage src="../images/BASE.jpg" alt="background" className="homeBackgroundImg" />,
            amount: 0,
          },
          {
              children:         <Fade top cascade>
                                    <ul className='homeMenuContainer'>
                                    <li>Resume</li>
                                    <li>Blog</li>
                                    <li>Projects</li>
                                  </ul>
                                </Fade>,
              amount: 0.2,
          },
          {
              children: <Fade top cascade>
                          <div className='homeMainTitleContainer'>
                            <h1>Léandre ARNAUD</h1>
                            <h3>Creates its little blog</h3>
                          </div>
                        </Fade>,
              amount: 0.1,
          },
          {
            children: 
                      <Bounce left>
                        <div className='arrowContainer'>
                          <p>↯</p>
                        </div>
                      </Bounce>,
            amount: -0.9,
          
          },
      ]}
      style={{
        height: '100vh',
      }}>
    </ParallaxBanner>
  </div>
)

export default Home