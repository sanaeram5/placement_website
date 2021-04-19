import React from "react";
// Bootstrap Components
import Header from './Header'
//import Css file
import "./Message.css";
import image_suri from '../images/rsuri.jpg'
import image_quadri from '../images/squadri.jpg'

const Message=()=> {
  return (
    <div>
          <Header/>

      <div className="content">
        <div className="upper-block">
          <div className="row">
            <div className="col-md-3 col-xs-3">

              <div className="panel panel-primary sidebar">
              
                <div className="panel-body no-padding">
                  <div className="list-group scroll">
                    <div id="faculty" >
                    <a className="sublist list-group-item no-vertical-border" href="#suri"><strong>Dr. Rihan Khan Suri </strong>| University Placement Officer</a>
                      <a className="sublist list-group-item no-vertical-border" href="#quadri"><strong>Dr. S. M. K. Quadri </strong>| Professor &amp; Head</a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-xs-9">
              <br/>
              <br/>
            <div id="suri">
              
              <img src={image_suri} className="faculty" alt=""/>
              <h3><strong>Dr. Rihan Khan Suri</strong></h3>
              <h4><strong>University Placement Officer</strong></h4><br/>
              <p>
                <strong>E-mail</strong> : rsuri@jmi.ac.in<br/>
                <strong>Mobile</strong> : +91-991-003-6980<br/>
              </p><br/>
              <strong>Message</strong>
                <p>The Indian Economy continues to record appreciable growth in all the sectors, resulting in tremendous
                demand for skilled personnel. In addition to the traditional avenues of employment in public and private
                sectors, there is now an increasing demand from the growing corporate sector for well trained and skilled
                human personnel. Jamia Millia Islamia has always harnessed and developed the intrinsic talent and potential
                of all its students. Besides our commitment to academic excellence, it also provides ample opportunities to
                students to excel in field of sports and extra-curricular activities. Students are academically competent with a
                wide vision of life and an inquisitive mind which helps them explore new frontiers of knowledge.
                  </p>
              <p>It is indeed a matter of great pride to invite you to participate in our campus recruitment process. Since its
                  inception, Jamia Millia Islamia has always been conscious of its responsibility to the nation. With its stringent selection procedure, it selects the best students from all over India. Three years of rigorous course curriculum and numerous extra-curricular activities shape the personality of our students and what we get after this span of time at the university are intelligent, sensitive human beings aware of both their responsibilities and right.</p>
           <hr></hr>
           <br></br>
            <div id="quadri">
              <img src={image_quadri} className="faculty" alt=""/>
              <h3><strong>Dr. S. M. K. Quadri</strong></h3>
              <h4><strong>Professor &amp; HOD</strong></h4><br/>
              <p>
                <strong>Education</strong> : M. Tech., Ph. D. (Computer Science)<br/>
                <strong>E-mail</strong> : quadrismk@jmi.ac.in(Primary)<br/>
                <strong>E-mail</strong> : quadrismk@hotmail.com  (Secondary)<br/>
                <strong>Research Area of Interest: </strong>: Software Engineering, Software Reliability Engineering<br/>
              </p><br/>
              <strong>Brief Background</strong>:
              <p>
                <strong> Topics of P.hD :</strong><br/><br/>
                A study of Software Reliability Growth Models Considering Optimal Software Release Policies and Hardware Reliability Theory.
              </p><br/>
              <p>
                <strong>Topic of M. Tech Dissertation:</strong> <br/><br/>
                Development of Budgetary Information system Related to Fund Allocation and Expenditure for a university
              </p><br/>
              <p>
                <strong>Publications:</strong> <br/><br/>
                129 Papers, 05 Book Chapters and 04 Books have been published; please see annexure-I, II &amp; III.
              </p>
              <strong>Message</strong>
                <p>The Indian Economy is being considered as one of the fastest growing and emerging economies in recent times.
                  The major reason behind the same is its strength in human resources. Being the second most populated country in the world, India can gain greater development if it handles its human resources appropriately both by government as well as individuals and institutions. And one such measure is the provision of qualitative education of highest standard from any measurable angle.</p>
                  <p>Qualitative higher and technical education holds an edge in transforming human beings into human capital and
                      human resource. Institutions of higher learning such Central University Jamia Millia Islamia is committed to the task
                      of reducing/bridging this gap.</p>
                      <p>In this endeavor, Department of Computer Science of Jamia Millia Islamia has enriched its programmes through
                      complete overhauling of course structure, syllabus updated with contemporary requirements of the universities,
                      institutions and industry. We have a strong placement team with experienced senior professor heading, to guide
                      the talented and enthusiast youth by providing direction in order to attain right placements which smoothens life’s
                      journey for self and future generations.</p>
                      <p>The department boasts of availability of the state of the art infrastructure as well as highly motivated and qualified faculty members and staff to guide the youth, which in turn has also been reflected in the overall performance
                      of the students.</p>
                      <p>I, personally, take pleasure in inviting industries to take the opportunity of availing the best of the brains for individual as well corporate and, thereby, being a part of national development.</p>
          
                </div>       
              </div>
            </div>
          </div>
        </div>    
      </div>
    </div>
  
  );
}

export default Message;
