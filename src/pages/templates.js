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
import Rentman from "../components/templates/rentman"

class Templates extends Component {

  state = {
    newspaper: false,
    modern: false,
    colorBlock: false,
    sober: false,
    tonDesign: false
  }

  displayNewspaper = () => {
    this.setState({ newspaper: !this.state.newspaper})
  }


   displayModern = () => {
    this.setState({ modern: !this.state.modern})
  }


displayColorBlock = () => {
    this.setState({ colorBlock: !this.state.colorBlock})
  }

  displayTonDesign = () => {
    this.setState({ tonDesign: !this.state.tonDesign})
  }



  render() {

    let newspaper = '';

    if (this.state.newspaper === true) {
      newspaper= <Newspaper />
    }

    let modern = '';

    if (this.state.modern === true) {
      modern= <Modern />
    }

    let colorBlock = '';

    if (this.state.colorBlock === true) {
      colorBlock= <ColorBlock />
    }

    let rentman = '';
    if (this.state.tonDesign === true) {
      rentman= <Rentman />
    }

    return (
 <Layout>
    <SEO title="Templates" keywords={[`webdesign`, `portfolio`, `webdevelopment`]} />
    <h1 className="Title"> <span className ="span"> </span>  Design </h1>

    <div className="templates">
      <div
        style ={{
          color: this.state.newspaper ? `black` : `transparent`
        }}>
          <h2 onClick={this.displayNewspaper}> Portfolio #1 </h2>
      </div>
          {newspaper}
      <div
        style ={{
          color: this.state.modern ? `black` : `transparent`
        }}>
          <h2 onClick={this.displayModern}> Portfolio #2 </h2>
      </div>
      {modern}
      <div
        style ={{
          color: this.state.colorBlock ? `black` : `transparent`
        }}>
          <h2 onClick={this.displayColorBlock}>Portfolio #3</h2>
      </div>
      {colorBlock}
      <div
        style ={{
          color: this.state.sober ? `black` : `transparent`
        }}>
      <h2  onClick={this.displayTonDesign} >Rentman</h2>
      </div>
      {rentman}
      </div>


  </Layout>

      )
  }
}



export default Templates;
