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
      show: 'icone'
    }



    menuAppearsHandler = () => {
      this.setState({show: 'menu'})
    }

    iconeAppearsHandler = () =>{
      this.setState({show: 'icone'})
    }

render() {

  let menu = ''

  if (this.state.show === 'icone') {
    menu = <div className="menuSmall" onClick={this.menuAppearsHandler}>
            <FaBars />
           </div>
  } else if (this.state.show === 'menu') {
    menu = <div className="menu">

            <Link to="/"> <p> <span className= "Fa"> <FaHome /> </span> Home </p> </Link>

             <Link to="/templates/"> <p> <span className= "Fa"> <FaFolderOpen /> </span>  Templates </p> </Link>

             <Link to="/contact/"> <p> <span className= "Fa"> <FaPhone /> </span> Contact </p> </Link>
            <p className="close"onClick={this.iconeAppearsHandler} >
              <FaTimes />
            </p>
            </div>
  }


  return (
    <div >
    <Backdrop show={this.state.show === 'menu'} clicked={this.iconeAppearsHandler}/>
    {menu}
    </div>

    )
}
}





export default Menu;
