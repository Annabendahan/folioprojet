import React from "react"
import { Link } from "gatsby"
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Steps from "../components/steps"
import { Parallax } from 'react-scroll-parallax';
import Range from "../components/range"
import Video from '../images/cogwheelsilhouette_2.gif'
import picPhone from '../images/pavan-trikutam-1660-unsplash.jpg';

const Contact = () => (
  <Layout>
  <SEO title="Contact" keywords={[`webdesign`, `portfolio`, `webdevelopment`]} />
  <h1 className="TitleC"> Contact</h1>
    <img  src={picPhone} className="picPhone" alt="fireSpot"/>
  <Parallax className="" y={[-10,50]} tagOuter="figure">
    <div className="details">
    <p> <span className="Mail"> <FaEnvelope />  </span> an.bendahan@gmail.com  </p>
    <p> <span className="Phone"> <FaPhone/> </span> 0659133919 </p>
    <div className = "icones" >
    </div>
    </div>
  </Parallax>







  </Layout>
  )

export default Contact
