
import React, {Component} from "react"
import InputRange from 'react-input-range';
import "./range.css"
import { FaHeart } from 'react-icons/fa';
import { FaThumbsUp} from 'react-icons/fa';


class Range extends Component {
  constructor(props) {
    super(props);

    this.state = { value: 5 };
  }



  render(){
    console.log(parseInt(this.state.value))


    let output = ''



    if ( parseInt(this.state.value) < 3) {
      output = <h3 className= "ViteFait"> Vite fait </h3>
    } else if (parseInt(this.state.value) < 6) {
      output = <h3 className= "Tranquille"> Tranquille </h3>
    } else if ( parseInt(this.state.value) < 8) {
      output = <h3 className= "Jelike"> Je like ! <FaThumbsUp /> </h3>
    } else if ( parseInt(this.state.value) < 11) {
      output = <h3 className= "CoupdeC "> Coup de <FaHeart /> </h3>
    }


    return(

      <div
    style={{
      marginTop: `400px`,
      textAlign: `center`,
      background: `white`,
      padding: `30px`
    }}
  >

  <h2> T'as passé un bon moment sur notre site? </h2>

      <input type="range" max={10}
        min={0} value={this.state.value}
        onChange={event => this.setState({ value: event.target.value })} />
      {output}

      </div>



      )
  }
}



export default Range;
