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
      const[navIsOpen,setnavIsOpen]=useState(false);

      const toggle=()=>{
        setnavIsOpen(!navIsOpen);
      }

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
      <NavbarToggler  onClick={toggle} />
      <Collapse isOpen={navIsOpen} navbar>
        <Nav className="ml-auto " navbar >
          <NavItem  >
            <NavLink className="nav-link" href="/">Home</NavLink>
          </NavItem >
          <NavItem  >
            <NavLink className="nav-item" href="/about">About</NavLink>
          </NavItem>
          <NavItem  className="nav-item">
            <NavLink href="/contact">Contact Us</NavLink>
          </NavItem >
          <UncontrolledDropdown onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={dropDownVisibility}  setActiveFromChild className="d-inline-block " 
         >
            <DropdownToggle nav caret >
              More
            </DropdownToggle>
            <DropdownMenu left >
              <DropdownItem  href="/student_profile">
                Student Profile
              </DropdownItem>
            
              <DropdownItem href="/faculty">
                Faculty Profile
              </DropdownItem>
              
              <DropdownItem href="/message">
                  Message Corner
              </DropdownItem>
              

              <DropdownItem href="recruiters">
                  Past Placement
              </DropdownItem>
              
              <DropdownItem href="coordinators">
                  Placement Team
              </DropdownItem>
              
              <DropdownItem href="curriculum">
                  Syllabus
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

        </Nav>
      </Collapse>
    </Navbar>
  </div>
    );
  }

export default Header;