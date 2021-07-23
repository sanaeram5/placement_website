import React from 'react';
import './Footer.css'
import jamia from '../web_design/MainFinal/logo.png';
import linkedin from  '../web_design/MainFinal/linkedin.png';
import insta from '../web_design/MainFinal/instagram.png';
import email from '../web_design/MainFinal/email.png';
import {Link,useLocation } from 'react-router-dom';

const Footer = ()=> {
       const location=useLocation();        
    
        return(
            <>
            <div className="footer-container">
                <div className={location.pathname==="/"?"footer-top-home":"footer-top"}></div>
                <div className="footer-main">
                    <div style={{width:"25%"}}>
                        <img src={jamia} style={{width:"58%",margin:"30px 0px 35px 50px", position:"relative"}}/>
                    </div>

                    <div className="footer-sub-containers" style={{width:"25%"}}>
                        <h3 className="footer-heading">Contact Us :</h3>
                        <div className="footer-social-media"><img src={linkedin}className="social-icons"    /><span>www.linkedin.com</span></div>
                        <div  className="footer-social-media"><img src={insta} className="social-icons"></img><span>www.instagram.com</span></div>
                        <div className="footer-social-media"><img src={email} className="social-icons"></img><span>placement_website@jmi.com</span></div>
                        
                    </div>
                    <div className="footer-sub-containers"  style={{width:"28%"}}>
                        <h3 className="footer-heading">Placement Coordinators :</h3>
                        <div><h5 className="footer-coordinator">Ariba Ather</h5><p style={{fontSize:"12px"}}>+91 78950 80552</p></div>
                        <div><h5 className="footer-coordinator">Jawed Alam</h5><p style={{fontSize:"12px"}}>+91 77590 29463</p></div>
                                              
                    </div><div className="footer-sub-containers" style={{width:"22%"}}>
                        <h3 className="footer-heading">Location :</h3>
                        <div><p style={{whiteSpace: "initial"}}>Maulana Mohammad Jauhar Ali Marg,Jamia Nagar, New Delhi</p></div>
                        <div><a href="www.jmi.ac.in" target="_blank" style={{textDecoration:"none", color:"white"}}><h5>www.jmi.ac.in</h5></a></div>
                        <div><img></img></div>
                        
                    </div>
                </div>
            </div>
            </>

        );
    }


export default Footer;