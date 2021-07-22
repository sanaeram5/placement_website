import React,{useState} from "react";
import './Header.css'
import jamia from '../web_design/MainFinal/logo.png'
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from "reactstrap";
    
  // class Header extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.onMouseEnter = this.onMouseEnter.bind(this);
  //   this.onMouseLeave = this.onMouseLeave.bind(this);
  //   this.state = {
  //     dropdownOpen1: false
  //   };
  // }

  // toggle(id) {
  //  this.setState({[id]:!this.state[`${id}`]})
  // }

 

  // render() {
    const Header =()=>{
      const [dropDownVisibility,setdropDownVisibility]= useState(false);


      const onMouseEnter=()=> {
       setdropDownVisibility(true);
      }
    
      const onMouseLeave=()=>{
        setdropDownVisibility(false);
    
      }
   
    return(
         <div>
    <Navbar className="navbar-lightstyle" style={{background:"#09526F"}}  expand="md">
      <NavbarBrand href="/"><img src={jamia} style={{width:"40px"}}/></NavbarBrand>
      <NavbarToggler  />
      <Collapse  navbar>
        <Nav className="ml-auto " navbar >
          <NavItem className="nav-item" >
            <NavLink href="/">Home</NavLink>
          </NavItem >
          <NavItem  className="nav-item">
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem  className="nav-item">
            <NavLink href="/contact">Contact Us</NavLink>
          </NavItem >
          <UncontrolledDropdown onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={dropDownVisibility}  setActiveFromChild className="d-inline-block " 
         >
            <DropdownToggle nav caret >
              More
            </DropdownToggle>
            <DropdownMenu right style={{backgroundColor:"rgb(28, 166, 201)"}}>
              <DropdownItem  href="/student_profile">
                Student Profile
              </DropdownItem>
              <DropdownItem divider style={{backgroundColor:"black"}}/>
              <DropdownItem href="/faculty">
                Faculty Profile
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/message">
                  Message Corner
              </DropdownItem>
              <DropdownItem divider />

              <DropdownItem href="recruiters">
                  Past Placement
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="coordinators">
                  Placement Team
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/message">
                  Syllabus
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem  className="nav-item"><NavLink href="/login">Login</NavLink></NavItem>

        </Nav>
      </Collapse>
    </Navbar>
  </div>
    );
  }

export default Header;