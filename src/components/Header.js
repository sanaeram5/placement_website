import React,{useState} from "react";
import jamia from '../web_design/Main Final/logo.png'
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

  // onMouseEnter(id) {
  //   this.setState({ [id]: true });
  // }

  // onMouseLeave(id) {
  //   this.setState({ [id]: false });

  // }

  // render() {
    const Header =()=>{
     const [isOpen,setIsOpen] =useState(false);

     const toggle=()=>{
       setIsOpen(!isOpen);
     }
     const [dropdownVisibility, setDropdownVisibility] = useState(false);
    
     const onMouseEnter=()=>{
       setDropdownVisibility(true);

     }
     const onMouseLeave=()=>{
       setDropdownVisibility(false);
     }
     

    return(
         <div>
    <Navbar style={{background:"#09526F"}}  expand="md">
      <NavbarBrand href="/"><img src={jamia} style={{width:"40px"}}/></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar className="d-inline-block"
          onMouseOver={onMouseEnter}
          onMouseLeave={onMouseLeave}
          isOpen={dropdownVisibility}>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  </div>
    );
  }

export default Header;