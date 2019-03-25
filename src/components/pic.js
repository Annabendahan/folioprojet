import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './pic.css'
import Backdrop from './backdrop'



const Pic = (props) => (
  <div >

  <img  src={props.img} className="bigPic" alt="fireSpot"  />
  </div>

  )

export default Pic;
