import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import './menu.css'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';



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
    menu = <div onClick={this.menuAppearsHandler}> <FaBars /> </div>
  } else if (this.state.show === 'menu') {
    menu =
    <div className="menu">
    MENU
    <p onClick={this.iconeAppearsHandler} > <FaTimes /> </p>
    </div>
  }


  return (
    <div >
    {menu}
    </div>

    )
}
}





export default Menu;
