/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Sidebar from "./sidebar"
import { StaticQuery, graphql } from "gatsby"
import pic1 from '../images/foliofolio.png';
import Header from "./header"
import "./layout.css"
import Menu from './menu'
import Footer from './footer'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <ParallaxProvider>


      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="flexbox">
        <div className="content" >



          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          > </div>
            <main>{children}</main>
        </div>

        <div className="sidebar">
          <Sidebar />
        </div>




      </div>

          <Footer />
           </ParallaxProvider>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
