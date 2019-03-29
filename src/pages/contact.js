import React from "react"
import { Link } from "gatsby"
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Steps from "../components/steps"
import { Parallax } from 'react-scroll-parallax';
import Range from "../components/range"
import Video from '../images/cogwheelsilhouette_2.gif'

const Contact = () => (
  <Layout>
  <SEO title="Contact" keywords={[`webdesign`, `portfolio`, `webdevelopment`]} />
  <h1 className="Title"> Contact</h1>
  <Parallax className="" y={[-80,60]} tagOuter="figure">
    <iframe src="https://giphy.com/embed/xUNd9XoXTfSdPsBh9m" width="800" height="400" frameBorder="0" className="giphy-embed" allowFullScreen>
    </iframe>
  </Parallax>
  <Parallax className="" y={[40,-20]} tagOuter="figure">
    <div className="details">
    <h3> an.bendahan@gmail.com</h3>
    <h3> 0659133919 </h3>
    <p> Contactez-nous pour nous poser vos questions, nous expliquer vos besoins,
    connaître nos tarifs
  et peut-être commencer le projet ! </p>
    <div className = "icones" >
    </div>
    </div>
  </Parallax>







  </Layout>
  )

export default Contact
