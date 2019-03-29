import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './step.css'
import { Parallax } from 'react-scroll-parallax';

const Step = (props) => (
  <div className="step">

  <p className="bigNumber"> {props.number} </p>
   <Parallax className="" y={[-100, 50]} tagOuter="figure">
        <h3 className="exp"> {props.exp} </h3>
    </Parallax>


  </div>

  )

export default Step;
