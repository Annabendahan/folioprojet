import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import './step.css'
import Step from './Step'


class Steps extends Component {


  render() {

    let StepsArray = [
      { number: 1,
        id: 1,
        text: "Lorem ipsum dolor sit amet."
    },
    {
      number:2,
      id: 2,
      text: "Lorem ipsum dolor sit amet."
    },
    {
      number:3,
      id: 3,
      text: "Lorem ipsum dolor sit amet."
    },
    {
      number:4,
      id: 4,
      text: "Lorem ipsum dolor sit amet."
    }
    ]

    let steps = StepsArray.map(( (st, i) =>{
      if ( st.number % 2 === 0) {
        return <div key={st.i} className="margin">
        <Step

          number={st.number}
          exp={st.text} />
      </div>
      } else {
     return <Step
      key={st.i}
      number={st.number}
      exp={st.text}/>}
    }))

    return(
    <div className="steps">
    {steps}
    </div>
      )
    }
  }




  export default Steps;
