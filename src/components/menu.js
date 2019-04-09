import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import './menu.css'
import { FaBars, FaFolderOpen, FaPhone } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Backdrop from './backdrop'




class Menu extends Component {

  state = {
      show: false
    }



    menuAppearsHandler = () => {
      this.setState({show: true})
    }

    iconeAppearsHandler = () =>{
      this.setState({show: false})
    }

render() {


  let menuIcone = <div className="menuSmall" onClick={this.menuAppearsHandler}>
    <div className="menu-svg">
    <svg className="line line1" width="17" height="1" viewBox="0 0 17 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="0.5" x2="30" y2="0.5" stroke="black"/>
    </svg>

    <svg className="line line2" width="17" height="1" viewBox="0 0 17 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="0.5" x2="30" y2="0.5" stroke="black"/>
    </svg>

    <svg className="line line3" width="17" height="1" viewBox="0 0 17 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="0.5" x2="30" y2="0.5" stroke="black"/>
    </svg>

    </div>
           </div>

  let menu =
      <div className="menu"
      style ={{
        left: this.state.show ? '-10px' : '-300px',
        opacity: this.state.show ? '1' : 'O '
      }}>
            <Link to="/"> <p> <span className= "Fa"> <FaHome /> </span> HOME </p> </Link>
             <Link to="/projets/"> <p> <span className= "Fa"> <FaFolderOpen /> </span>  PROJETS</p> </Link>
             <Link to="/contact/"> <p> <span className= "Fa"> <FaPhone /> </span> CONTACT </p> </Link>
            <p className="close"onClick={this.iconeAppearsHandler} >
              <svg id="cross" width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="23.9244" y1="63.3012" x2="74.8046" y2="10.9543" stroke="white" stroke-width="3"/>
              <line x1="24.023" y1="12.903" x2="77.4122" y2="62.6885" stroke="white" stroke-width="3"/>
            </svg>
            </p>
            </div>


  let svg1 = <svg id="svg"  viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<line  x1="14" y1="15.5" x2="87" y2="15.5" stroke="black" stroke-width="3"/>
<line  x1="14" y1="38.5" x2="87" y2="38.5" stroke="black" stroke-width="3"/>
<line  x1="14" y1="61.5" x2="87" y2="61.5" stroke="black" stroke-width="3"/>
</svg>

let line1 = <svg className="line1" width="389" height="289" viewBox="0 0 389 289" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="76" y1="90.5" x2="268" y2="90.5" stroke="black" stroke-width="3"/>
</svg>





  return (
    <div >
    <Backdrop show={this.state.show} clicked={this.iconeAppearsHandler}/>
    {menuIcone}
    {menu}
    </div>

    )
}
}





export default Menu;
