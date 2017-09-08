import React, { Component } from 'react'
import { Nav, Navbar, NavItem,  } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router'

class Menu extends Component{
  render(){
    return(
      <Navbar inverse collapseOnSelect>
   <Navbar.Header>
     <Navbar.Brand>
       <Link to="/"> VIP ESTHETIC STUDIO </Link>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
     <Nav>

       <LinkContainer to='/about'>
       <NavItem eventKey={1}> About</NavItem>
       </LinkContainer>

       <LinkContainer to='/contact'>
         <NavItem eventKey={2}>Contact</NavItem>
       </LinkContainer>

     </Nav>
     {/* <Nav pullRight>
       <NavItem eventKey={1} href="#">Link Right</NavItem>
       <NavItem eventKey={2} href="#">Link Right</NavItem>
     </Nav> */}
   </Navbar.Collapse>
 </Navbar>
    )
  }
}
export default Menu
