import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className='homeContainer'>
      <img src='static/background.JPG' alt='background'>
      </img>


      <ul className='homeMenuContainer'>
        <li>Resume</li>
        <li>Blog</li>
        <li>Projects</li>
      </ul>

      <div className='homeMainTitleContainer'>
        <h1>Léandre ARNAUD</h1>
        <h3>Creates its little blog</h3>
      </div>
    </div>
  </Layout>
)

export default IndexPage