import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newspaper from "../components/templates/newspaper"

class Templates extends Component {

  state = {
    newspaper: false,
    modern: '',
    colorBlock: '',
    sober: ''
  }

  displayNewspaper = () => {
    this.setState({ newspaper: !this.state.newspaper})
  }

  render() {

    let newspaper = '';

    if (this.state.newspaper === true) {
      newspaper= <Newspaper />
    }

    return (
 <Layout>
    <SEO title="Templates" />

    <div className="templates">
      <h2 onClick={this.displayNewspaper}>Newspaper</h2>
      {newspaper}
      <h2>Modern</h2>
      <h2>ColorBlock</h2>
      <h2>Sober</h2>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>

      )
  }
}



export default Templates;
