import React,{Component} from 'react';
import './Footer.css'
import jamia from '../web_design/Main Final/logo.png';
import linkedin from  '../web_design/Main Final/linkedin.png';
import insta from '../web_design/Main Final/instagram.png';
import email from '../web_design/Main Final/email.png';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){ 
        return(
            <>
            <div className="footer-container">
                <div className="footer-top"></div>
                <div className="footer-main">
                    <div>
                        <img src={jamia} style={{width:"150px",margin:"30px 0px 35px 50px"}}/>
                    </div>

                    <div className="footer-contact-us">
                        <h3 className="footer-heading">Contact Us :</h3>
                        <div className="footer-social-media"><img src={linkedin}className="social-icons" /><span>www.linkedin.com</span></div>
                        <div  className="footer-social-media"><img src={insta} className="social-icons"></img><span>www.instagram.com</span></div>
                        <div className="footer-social-media"><img src={email} className="social-icons"></img><span>placement_website@jmi.com</span></div>
                        
                    </div>
                    <div className="footer-placement">
                        <h3 className="footer-heading">Placement Coordinators :</h3>
                        <div><h5 style={{ fontWeight:"bold"}}>Ariba Ather</h5><p style={{fontSize:"12px"}}>+91 78950 80552</p></div>
                        <div><h5 style={{ fontWeight:"bold"}}>Zia Haider Naqvi</h5><p style={{fontSize:"12px"}}>+91 99907 66146</p></div>
                                              
                    </div><div className="footer-location">
                        <h3 className="footer-heading">Location :</h3>
                        <div><p style={{width:"250px",whiteSpace: "initial"}}>Maulana Mohammad Jauhar Ali Marg,Jamia Nagar, New Delhi</p></div>
                        <div><a href="www.jmi.ac.in" target="_blank" style={{textDecoration:"none", color:"white"}}><h5>www.jmi.ac.in</h5></a></div>
                        <div><img></img></div>
                        
                    </div>
                </div>
            </div>
            </>

        );
    }
}

export default Footer;