import { Link } from "gatsby"
import PropTypes from "prop-types"
import Pic from '../pic'
import React, {Component} from "react"
import './newspaper.css'
import { Document } from 'react-pdf'
import pic1 from '../../images/Capture d’écran 2019-03-24 à 21.25.53.png';
import pic2 from '../../images/Capture d’écran 2019-03-24 à 21.39.08.png';
import pic3 from '../../images/Capture d’écran 2019-03-24 à 21.52.01.png';
import pic4 from '../../images/Capture d’écran 2019-03-24 à 21.52.38.png';
import Backdrop from '../backdrop'


class Modern extends Component{

  state = {
    pic: false,
    picName: ''
  }


  openPic1Handler= () => {
    this.setState({pic: true, picName: pic1})
  }

  openPic2Handler= () => {
    this.setState({pic: true, picName: pic2})
  }

  openPic3Handler= () => {
    this.setState({pic: true, picName: pic3})
  }

  openPic4Handler= () => {
    this.setState({pic: true, picName: pic4})
  }

  closePicHandler = () => {
    this.setState({pic: false})
  }


  render(){
    let pic = ''

    if (this.state.pic) {
      pic = < Pic
      img= {this.state.picName}/>
    }

return(
<div className="newspaper">
<Backdrop show={this.state.pic} clicked={this.closePicHandler}/>
{pic}
  <p> Template au style moderne, coloré. </p>

  <div className="pics">
  <img  src={pic1} className="pic" alt="fireSpot"  onClick={this.openPic1Handler}/>
   <img  src={pic2} className="pic" alt="fireSpot" onClick={this.openPic2Handler} />
    <img  src={pic3} className="pic" alt="fireSpot" onClick={this.openPic3Handler} />
     <img  src={pic4} className="pic" alt="fireSpot" onClick={this.openPic4Handler} />
     </div>
  </div>

  )


  }

}







export default Modern;
