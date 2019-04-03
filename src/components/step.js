import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './step.css'
import { Parallax } from 'react-scroll-parallax';

const Step = (props) => (
  <div className="">

  <h3 className="subtitle"> {props.title} </h3>
        <p className="exp"> {props.exp} </p>

  </div>

  )

export default Step;
