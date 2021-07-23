import React,{useState} from "react";
import "./StudentProfileCard.css";
import {Card,Container, Row, Col, Modal, Button} from "react-bootstrap";
import jpic from "./../web_design/student_page/students_pics/JaanbaazAkhtar.jpg";
import linkedIn from "./../web_design/MainFinal/linkedin2.png";
import gmail from "./../web_design/MainFinal/gmail2.png";
import github from "./../web_design/MainFinal/github.png";

function MyVerticallyCenteredModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{padding:'0px'}} className="card-coordinators mb-3">
              <div className="modal-head" style={{textAlign:'center', paddingTop:'2%', paddingBottom:'2%'}}>
                <h4>Jaanbaaz Akhtar</h4>
                <h6>19MCA019</h6>
              </div>
          <Row>
            <Col md={4} sm={6} xs={12}>
              <img src={jpic} alt="" width="80%" height="100%" style={{marginLeft:'10%', borderRadius:'25px'}}/>
            </Col>
            <Col md={8} sm={6} xs={12}>
              
              <h3>Technical Skills:</h3>
              <ul className="d-flex align-items-center">
                <li className="skill">HTML</li>
                <li className="skill">CSS</li>
                <li className="skill">JAVA</li>
                <li className="skill">C++</li>
              </ul>
            </Col>
          </Row>
          <div className="social-links pl-5">
            <p><a href="#"><span><img src={linkedIn} width="25px"/></span> linkedin link</a></p>
            <p><a href="#"><span><img src={gmail} width="25px"/></span> gmail link</a></p>
            <p><a href="#"><span><img src={github} width="25px"/></span>github link</a></p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

const StudentProfileCard = (props) => {

    const [modalShow, setModalShow] = useState(true);

    return(
        <>
           {/* <Card className="studentCard m-3" onClick={() => setModalShow(true)} style={{ width: '13rem', borderRadius:'20px',textAlign:'center', alignItems:'center', background:'linear-gradient(#43a2da,#3a90c1)',boxShadow:'0 10 50 30% #071e47' }}>
                <Card.Img variant="top" className="m-3" src={props.image} style={{width:'85%', borderRadius:'15px',border:'6px solid #215998',boxShadow:'0 10 70 22% #000000'}}  />
                    <Card.Body style={{color:'#ffffff'}}>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
    </Card>*/}
                <div className="card-coordinators mb-3" onClick={() => setModalShow(false)}>

            <div className="row no-gutters ">

                <div className="col-md-12 col-xs-12 col-lg-4">
                    <img className="rounded-rect" src={props.image} />
                </div>

                <div className="col-md-12 col-xs-12 col-lg-8">
                    
                        <h5 className="card-name">{props.title}</h5>

                        <div className=" mt-4"> &nbsp;&nbsp;&nbsp;{props.text}</div>
                          <ul className="d-flex align-items-center">
                            <li className="skill">HTML</li>
                            <li className="skill">CSS</li>
                            <li className="skill">JAVA</li>
                            <li className="skill">C++</li>
                          </ul>

                </div>

            </div>
        </div>
        </>
    );
}

export default StudentProfileCard;