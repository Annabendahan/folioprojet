import React from "react"
import { Link } from "gatsby"
import { FaAngellist } from 'react-icons/fa';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Steps from "../components/steps"
import Overlap from '../components/IntroCopy'
import { Parallax } from 'react-scroll-parallax';
import pic1 from '../images/marvin-meyer-571072-unsplash.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Parallax className="Title-c" y={[-200, 80]} tagOuter="figure">
        <h1 className="Title">Ton <span className="TitleBis"> Portfolio </span> </h1>
    </Parallax>

    <div style={{ width: `70%`, marginBottom: `1.45rem`, marginLeft: '12rem'}}>
      <img  src={pic1} className="picHome" alt="fireSpot"/>
    </div>
    <Parallax className="" y={[20, -20]} tagOuter="figure">
        <div className="desc">
          <h3 className="descG"> Besoin d'un site vitrine? On vous fait ça. <FaAngellist /> </h3>
          <p> Artiste, designer, start-up en création... vous avez envie d'un site original?
          Mais vous ne savez pas coder?
          Choisissez parmis nos modèles ou donnez-nous votre design. On vous le développe sous 10 jours </p>
        </div>
     </Parallax>
    <Overlap />
    <Steps/>

  </Layout>
)

export default IndexPage
