import React,{useState} from "react";
import "./StudentProfileCard.css";
import {Card,Container, Row, Col, Modal, Button} from "react-bootstrap";
import jpic from "./../web_design/student_page/students_pics/JaanbaazAkhtar.jpg";

function MyVerticallyCenteredModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const StudentProfileCard = (props) => {

    const [modalShow, setModalShow] = useState(false);

    return(
        <>
            <Card className="studentCard m-3" onClick={() => setModalShow(true)} style={{ width: '13rem', borderRadius:'20px',textAlign:'center', alignItems:'center', background:'linear-gradient(#43a2da,#3a90c1)',boxShadow:'0 10 50 30% #071e47' }}>
                <Card.Img variant="top" className="m-3" src={props.image} style={{width:'85%', borderRadius:'15px',border:'6px solid #215998',boxShadow:'0 10 70 22% #000000'}}  />
                    <Card.Body style={{color:'#ffffff'}}>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />      
        </>
    );
}

export default StudentProfileCard;