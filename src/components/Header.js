<<<<<<< HEAD
import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
//import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import jamia from '../web_design/MainFinal/logo.png';
const Header = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img src={jamia} style={{width:"40px"}} alt="logo" /> 
                    </NavLink>
                </div>
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {/*{isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>*/}
                    <ul className={boxClass.join(' ')}>
                        <li  className="menu-item" >
                            <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                        </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Shop {/*<FiChevronDown />*/} </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Online Shop </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li>
                            </ul>
                        </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>
                    </ul>
                    </nav>     
                </div>   
            </div>
	    </div>
    </header>
    )
}
=======
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

>>>>>>> 3a76ecbd136c716ab750d4cbe92a89cfda028357
export default Header;