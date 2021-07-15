import React, {useState} from "react";
import  "./StudentProfile.css";
import Header from './Header';
import PageHeader from './PageHeader';
import { Container, Modal, Button, Card } from "react-bootstrap";
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





const StudentProfile = () => {

    const [modalShow, setModalShow] = useState(false);

    return(
        <>
            <Header/>

            <section className="container">
                <PageHeader page="Student Profile"/>
            </section>

            <section className="mt-5">
                <Container>
                    <div className="nav_heads">
                        <ul class="nav nav-tabs" id="nav_head" >
                            <li class="active tab_btn"><a className="btn t_btn" data-toggle="tab" href="#home" >BATCH 2019-2022</a></li>
                            <li className="tab_btn"><a className="btn t_btn" data-toggle="tab" href="#menu1">BATCH 2020-2022</a></li>
                        </ul>
                    </div>
                

                    <div class="tab-content">
                        <div id="home" class="tab-pane fade in active">
                            <h3>HOME</h3>

                                <Card className="studentCard" onClick={() => setModalShow(true)} style={{ width: '13rem', borderRadius:'20px',textAlign:'center', alignItems:'center' }}>
                                    <Card.Img variant="top" className="m-3" src={jpic}style={{width:'85%', borderRadius:'15px'}}  />
                                    <Card.Body>
                                        <Card.Title>Jaanbaaz Akhtar</Card.Title>
                                        <Card.Text>
                                            Mca 4th sem
                                        </Card.Text>
                                    </Card.Body>
                                </Card>


                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />

                        </div>

                        <div id="menu1" class="tab-pane fade">

                            <h3>Menu 1</h3>

                                <Card className="studentCard" onClick={() => setModalShow(true)} style={{ width: '13rem', borderRadius:'20px',textAlign:'center', alignItems:'center' }}>
                                    <Card.Img variant="top" className="m-3" src={jpic}style={{width:'85%', borderRadius:'15px'}}  />
                                    <Card.Body>
                                        <Card.Title>Jaanbaaz Akhtar</Card.Title>
                                        <Card.Text>
                                            Mca 4th sem
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                        </div>
                    </div>
                </Container>
            </section>
            
        </>
    );
}

export default StudentProfile;
