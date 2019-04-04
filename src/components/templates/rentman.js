import { Link } from "gatsby"
import PropTypes from "prop-types"
import Pic from '../pic'
import React, {Component} from "react"
import { FaLocationArrow } from 'react-icons/fa';
import './newspaper.css'
import pic1 from '../../images/bannerrentman.png';
import pic2 from '../../images/rentman banner.jpg';
import pic3 from '../../images/banner2.png';

import Backdrop from '../backdrop'


class Rentman extends Component{

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

  <div className="pics">
  <img  src={pic1} className="pic" alt="fireSpot"  onClick={this.openPic1Handler}/>
   <img  src={pic2} className="pic" alt="fireSpot" onClick={this.openPic2Handler} />
    <img  src={pic3} className="pic" alt="fireSpot" onClick={this.openPic3Handler} />

     </div>
  </div>

  )


  }

}




export default Rentman;
