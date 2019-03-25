import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newspaper from "../components/templates/newspaper"
import Modern from "../components/templates/modern"

class Templates extends Component {

  state = {
    newspaper: false,
    modern: false,
    colorBlock: false,
    sober: false
  }

  displayNewspaper = () => {
    this.setState({ newspaper: !this.state.newspaper})
  }


   displayModern = () => {
    this.setState({ modern: !this.state.modern})
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

    return (
 <Layout>
    <SEO title="Templates" />

    <div className="templates">
      <div
        style ={{
          color: this.state.newspaper ? `black` : `transparent`
        }}>
          <h2 onClick={this.displayNewspaper}>Newspaper</h2>
      </div>
          {newspaper}
      <div
        style ={{
          color: this.state.modern ? `black` : `transparent`
        }}>
          <h2 onClick={this.displayModern}>Modern</h2>
      </div>
      {modern}
      <div
        style ={{
          color: this.state.colorBlock ? `black` : `transparent`
        }}>
          <h2>ColorBlock</h2>
      </div>
      <div
        style ={{
          color: this.state.sober ? `black` : `transparent`
        }}>
      <h2>Sober</h2>
      </div>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>

      )
  }
}



export default Templates;
