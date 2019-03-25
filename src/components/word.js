import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"


class Word extends Component{

  state = {
    opacity: 1,
    left: `100px`
  }

   componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

handleScroll = () => {
    this.setState({opacity: 1, left: `-500px`})
}


  render() {

    let opacityValue = this.state.opacity
    console.log(opacityValue)

    let topValue = this.state.left

    return(
    <div className="word">
       <p>WORD WORD </p>
    </div>




      )}
}





export default Word;
