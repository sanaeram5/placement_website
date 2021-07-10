import React from "react";
import "./StudentProfileCard.css";
import {Card,Container, Row, Col} from "react-bootstrap";
import jpic from "./../web_design/student_page/students_pics/JaanbaazAkhtar.jpg";

const StudentProfileCard = () => {
    return(
        <>
            
            <Container>
                <Row xs={1} sm={2} md={4} className="g-4 m-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card style={{ width: '13rem', borderRadius:'20px',textAlign:'center', alignItems:'center' }}>
                                <Card.Img variant="top" className="m-3" src={jpic}style={{width:'85%', borderRadius:'15px'}}  />
                                <Card.Body>
                                    <Card.Title>Jaanbaaz Akhtar</Card.Title>
                                    <Card.Text>
                                        Mca 4th sem
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
                
        </>
    );
}

export default StudentProfileCard;