import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import './step.css'
import Step from './step'


class Steps extends Component {


  render() {

    let StepsArray = [
      { number: 1,
        id: 1,
        title: 'UI',
        text: "Création d'interfaces agréables et dynamques"
    },
    {
      number:2,
      id: 2,
      title: 'UX',
      text: "Facilitation de l'expérience utilisateur en la rendant intuitive"
    },
    {
      number:3,
      id: 3,
      title: 'Développement ',
      text: "Utilisation d'outils modernes pour développer des applications efficaces"
    },
    {
      number:4,
      id: 4,
      title: 'Responsive design',
      text: "Adaptation du site à toutes les tailles d'écran"
    }
    ]

    let svg0 = <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="20.25" y="22.25" width="60.5" height="35.5" rx="2.75" stroke="black" stroke-width="0.5"/>
<rect x="29.25" y="38.25" width="12.5" height="11.5" stroke="black" stroke-width="0.5"/>
<rect x="56.25" y="28.25" width="14.5" height="19.5" stroke="black" stroke-width="0.5"/>
<rect x="40.25" y="62.25" width="19.5" height="4.5" stroke="black" stroke-width="0.5"/>
</svg>

let svg1 = <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="14.25" y="37.25" width="29.5" height="15.5" rx="1.75" stroke="black" stroke-width="0.5"/>
<rect x="62.25" y="20.25" width="15.5" height="8.5" rx="1.75" stroke="black" stroke-width="0.5"/>
<rect x="62.25" y="40.25" width="15.5" height="8.5" rx="1.75" stroke="black" stroke-width="0.5"/>
<rect x="62.25" y="60.25" width="15.5" height="8.5" rx="1.75" stroke="black" stroke-width="0.5"/>
<line x1="44" y1="44.75" x2="62" y2="44.75" stroke="black" stroke-width="0.5"/>
<line x1="53.75" y1="65" x2="53.75" y2="24" stroke="black" stroke-width="0.5"/>
<line x1="62" y1="24.25" x2="54" y2="24.25" stroke="black" stroke-width="0.5"/>
<line x1="62" y1="65.25" x2="54" y2="65.25" stroke="black" stroke-width="0.5"/>
</svg>

let svg2 = <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="20.25" y="21.25" width="60.5" height="35.5" rx="2.75" stroke="black" stroke-width="0.5"/>
<rect x="40.25" y="60.25" width="19.5" height="4.5" stroke="black" stroke-width="0.5"/>
<line x1="44" y1="30.75" x2="72" y2="30.75" stroke="black" stroke-width="0.5"/>
<line x1="44" y1="42.75" x2="72" y2="42.75" stroke="black" stroke-width="0.5"/>
<line x1="44" y1="46.75" x2="72" y2="46.75" stroke="black" stroke-width="0.5"/>
<line x1="44" y1="34.75" x2="72" y2="34.75" stroke="black" stroke-width="0.5"/>
<line x1="44" y1="38.75" x2="72" y2="38.75" stroke="black" stroke-width="0.5"/>
<line x1="25" y1="30.75" x2="32" y2="30.75" stroke="black" stroke-width="0.5"/>
<line x1="25" y1="42.75" x2="32" y2="42.75" stroke="black" stroke-width="0.5"/>
<line x1="25" y1="46.75" x2="32" y2="46.75" stroke="black" stroke-width="0.5"/>
<line x1="25" y1="34.75" x2="32" y2="34.75" stroke="black" stroke-width="0.5"/>
<line x1="25" y1="38.75" x2="32" y2="38.75" stroke="black" stroke-width="0.5"/>
<line x1="37.25" y1="21" x2="37.25" y2="57" stroke="black" stroke-width="0.5"/>
</svg>


let svg3 = <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="33.25" y="22.25" width="29.5" height="51.5" rx="1.75" stroke="black" stroke-width="0.5"/>
<g filter="url(#filter0_d)">
<circle cx="47.5" cy="68.5" r="1.375" stroke="black" stroke-width="0.25"/>
</g>
<line x1="41" y1="25.75" x2="54" y2="25.75" stroke="black" stroke-width="0.5"/>
<defs>
<filter id="filter0_d" x="42" y="67" width="11" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>



    let steps = StepsArray.map(( (st, i) =>{

      if (i === 0){return <div key={st.i} className="step">

        {svg0}
        <Step
          title={st.title}
          exp={st.text} />
      </div>} else if (i ===1 ) {return <div key={st.i} className="step">

        {svg1}
        <Step
          title={st.title}
          exp={st.text} />
      </div>} else if (i ===2 ) {return <div key={st.i} className="step">

        {svg2}
        <Step
          title={st.title}
          exp={st.text} />
      </div>} else if (i ===3 ) {return <div key={st.i} className="step">

        {svg3}
        <Step
          title={st.title}
          exp={st.text} />
      </div>
      }



    }))

    return(
    <div className="steps">
    {steps}
    </div>
      )
    }
  }




  export default Steps;
