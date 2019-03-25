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
        text: 'Choisis ton template ou créée ton propre design'
    },
    {
      number:2,
      id: 2,
      text: "Contacte-nous pour discuter du projet"
    },
    {
      number:3,
      id: 3,
      text: "Envoie nous les photos et infos à mettre"
    },
    {
      number:4,
      id: 4,
      text: "Site développé et référencé!"
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
