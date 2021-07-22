import React from 'react';
import PageHeader from './PageHeader';
import { Accordion ,Card} from 'react-bootstrap';
import './Contact.css';
import contactImage from '../images/20943953.png';
import send from "../web_design/MainFinal/send.png"

function Faq() {
    return (
        <>
          <section className="container">
            <PageHeader page="PLACEMENT TEAM"/>
          </section>
          <div className="container-fluid contact__container">
              <div className=" contact__card ">
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <img src={contactImage} alt="" width="100%" height="100%" />
                      </div>
                      <div className="col-md-6 col-xs-12 contact__form ">
                        <div className="container pt-2 pl-5">
                          <form action="https://formsubmit.co/sanaeram5@gmail.com" method="POST">
                            <div className="form-group">
                              <label for="name">Name
                                <input type="text" name="name" required style={{width:'160%'}}/>
                              </label>
                            </div>
                            <div className="form-group">
                              <label for="email">E-mail
                                <input type="email" name="email" required  style={{width:'160%'}}/>
                              </label>
                            </div>
                            <div className="form-group">
                              <label for="message">Message
                                <textarea name="message" style={{width:'160%',border:'none', borderBottom:'1px solid gray'}}></textarea>
                              </label>
                            </div>
                            <button className="btn btn-primary" type="submit" style={{width:'50%'}}>Send <span className="pl-1"><img src={send} width="22px"/></span></button>
                          </form>
                        </div>
                      </div>
                    </div>
              </div>
          </div>
          <div className="container-fluid faq__container d-flex justify-content-center">
            <div className="card faq__card pt-5 pb-5" style={{width:'60%'}}>
            <div class="faq">
            <Accordion defaultActiveKey="0" style={{width:'90%', paddingLeft:'10%', alignItems:'center'}}>
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
          
        </>
    )
}

export default Faq;