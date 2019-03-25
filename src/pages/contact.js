import React from "react"
import { Link } from "gatsby"
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Steps from "../components/steps"
import { Parallax } from 'react-scroll-parallax';

const Contact = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="Title"> Contact</h1>

    <Parallax className="" y={[-80,60]} tagOuter="figure">

    <iframe src="https://giphy.com/embed/xUNd9XoXTfSdPsBh9m" width="640" height="360" frameBorder="0" className="giphy-embed" allowFullScreen>
    </iframe>

    </Parallax>

<Parallax className="" y={[40,-20]} tagOuter="figure">
      <div className="details">
        <h3> folio@gmail.com</h3>
        <h3> 0659133919 </h3>
        <div className = "icones" >
         <FaFacebook />
         <FaGithub />
         <FaTwitter />
       </div>
      </div>
    </Parallax>

  </Layout>
)

export default Contact
