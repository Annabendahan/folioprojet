import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './menu'



const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,

      position: `fixed`,
      left: `10px`,
      top: `0px`,
      color: `black`,
      zIndex: `300`
    }}
  >


<Menu />



  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
