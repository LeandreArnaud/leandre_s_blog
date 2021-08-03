import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import Resume from "../components/resume"
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';


const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <Home></Home>
      <Resume></Resume>
    </Layout>
  </ParallaxProvider>
)

export default IndexPage