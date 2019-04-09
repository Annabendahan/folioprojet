import React from "react"
import { Link } from "gatsby"
import { FaAngellist } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Steps from "../components/steps"
import Overlap from '../components/IntroCopy'
import { Parallax } from 'react-scroll-parallax';
import pic1 from '../images/ANNa.png';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`designer`, `portfolio`, `developer`]} />
    <div className="contentHome">
    <Parallax className="Title-c" y={[-100, 80]} tagOuter="figure">

        <h1 className="TitleHome">Anna Bendahan  </h1>
        <h2 className ="name">  Web Design & Development  </h2>
    </Parallax>


    <div className="images">
 <Parallax className="Title-c" x={[-15, 10]} y={[20, -10]} tagOuter="figure">
      <img  src={pic1} className="picHome" alt="fireSpot"/>
       </Parallax>


      <div className = "blueHome" > </div>

    </div>




    <Parallax className="" y={[20, -20]} tagOuter="figure">
        <div className="desc">
          <h3 className="descG"> Besoin d'un site vitrine? Vous êtes au bon endroit <FaAngellist /> </h3>
          <p> De la conception jusqu'au déploiement, je crée des applications web modernes et intuitives. En
          mêlant interface esthétique et développement solide, ces applications sont performantes et efficaces. </p>
        </div>
     </Parallax>


     <div className= "Ido">

       <Parallax className="" y={[20, -20]}  tagOuter="figure">
      <div className="behind"></div>
      </Parallax>
      <Steps/>
    </div>

</div>


<Link to="/projets/" className="button"> VOIR LES PROJETS</Link>




  </Layout>
)

export default IndexPage
