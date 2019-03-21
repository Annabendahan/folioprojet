import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './step.css'


const Step = (props) => (
  <div className="step">
  <p className="bigNumber"> {props.number}</p>
  <h3 className="exp"> {props.exp} </h3>
  </div>

  )

export default Step;
