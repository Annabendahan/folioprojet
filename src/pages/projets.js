import React, {Component} from "react"
import { Link } from "gatsby"
import { FaLocationArrow } from 'react-icons/fa';
import { FaCopy } from 'react-icons/fa';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Newspaper from "../components/templates/newspaper"
import Modern from "../components/templates/modern"
import ColorBlock from "../components/templates/colorBlock"
import { Parallax } from 'react-scroll-parallax';

import picEasyfork from '../images/brooke-lark-261793-unsplash.jpg';
import picBurgerapp from '../images/sameer-waskar-488251-unsplash.jpg';
import picTodolist from '../images/workshop-1116436-unsplash.jpg';
import picDesign from '../images/galymzhan-abdugalimov-181-unsplash.jpg';
import '../components/projets.css'

class Projets extends Component {

  render() {

    return(

      <Layout>
    <SEO title="Home" keywords={[`webdesign`, `portfolio`, `webdevelopment`]} />


 <h1 className="Title"> Les  projets </h1>
    <div className="projets">


    <div className= "projet">
     <Link to="https://ma-todolist.herokuapp.com/"> <div className= "imgs" >
       <h3 className= "projet-title">Ma Todolist <span className= "go-icone"> <FaLocationArrow  /></span></h3>
       <img  src={picTodolist} className="picProjet" alt="fireSpot" />

       </div> </Link>
    </div>


     <div className= "projet right">
      <Link to="https://makeyourburger.herokuapp.com/"> <div className= "imgs" >
       <h3 className= "projet-title"> BurgerApp<span className= "go-icone"> <FaLocationArrow  /></span> </h3>
         <img  src={picBurgerapp} className="picProjet" alt="fireSpot" />

       </div> </Link>
    </div>


    <div className= "projet">
       <Link to="https://www.easyfork.xyz/"><div className= "imgs" >
       <h3 className= "projet-title"> EasyFork<span className= "go-icone"> <FaLocationArrow  /></span></h3>
         <img  src={picEasyfork} className="picProjet" alt="fireSpot" />

       </div></Link>
    </div>


   <div className= "projet right">
       <Link to="/templates/"><div className= "imgs" >
       <h3 className= "projet-title"> Designs <span className= "go-icone"> <FaLocationArrow  /></span></h3>
         <img  src={picDesign} className="picProjet" alt="fireSpot" />

       </div> </Link>
    </div>


    </div>






  </Layout>

      )
  }}



export default Projets;
