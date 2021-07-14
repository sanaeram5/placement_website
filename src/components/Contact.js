import React from 'react';
import Header from './Header';
import { Accordion ,Card} from 'react-bootstrap';
import './Contact.css';
import contactImage from '../images/20943953.png';

function Faq() {
    return (
        <>
          <div className="container-fluid contact__container">
              <div className="card contact__card">
                    <div className="row">
                    <div className="top__header">
                    PLACEMENT TEAM
                    <div>❖</div>
                </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <img src={contactImage} alt="" width="90%" height="90%" />
                      </div>
                      <div className="col-md-6 col-xs-12 contact__form">
                      </div>
                    </div>
              </div>
          </div>
          <div className="container-fluid faq__container">
            <div className="card faq__card">
            <div class="faq">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  faq1
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>inside faq1</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  faq2
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>inside faq2</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  faq3
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>inside faq4</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  faq4
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>inside faq4</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            </div>  
            </div>
          </div>
          <div className="container">
            <form action="https://formsubmit.co/sanaeram5@gmail.com" method="POST">
              <input type="text" name="name" required/><br/>
              <input type="email" name="email" required/><br/>
              <textarea name="message"></textarea><br/>
              <button type="submit">Send</button>
            </form>
            <div class="faq">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  faq1
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>inside faq1</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  faq2
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>inside faq2</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  faq3
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>inside faq4</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  faq4
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>inside faq4</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            </div>
          </div> 
        </>
    )
}

export default Faq;