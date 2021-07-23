import React from "react"
import Layout from "../components/layout"
import Fade from 'react-reveal/Fade';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <div>
        <ParallaxBanner
          className="homeContainer"
          layers={[
              {
                children: <StaticImage src="../images/background.JPG" alt="background" className="homeBackgroundImg" />,
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
                                <h1>Blablou Bliblou</h1>
                                <h3>Creates its little blog</h3>
                              </div>
                            </Fade>,
                  amount: 0.3,
              },
          ]}
          style={{
            height: '100vh',
          }}>
        </ParallaxBanner>
      </div>

      <div>
        <h1>BLABLOU</h1>
        <h1>BLABLOU</h1>
        <h1>BLABLOU</h1>
        <h1>BLABLOU</h1>
        <h1>BLABLOU</h1>
        <h1>BLABLOU</h1>
        <h1>BLABLOU</h1>
        <h1>BLABLOU</h1>
        <h1>BLABLOU</h1>
        <h1>BLABLOU</h1>
        <h1>BLABLOU</h1>
      </div>
    </Layout>
  </ParallaxProvider>
)

export default IndexPage