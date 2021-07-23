    import React, {useState} from "react";
import  "./StudentProfile.css";
import Header from './Header';
import PageHeader from './PageHeader';
import { Container, Modal, Button, Card, Row } from "react-bootstrap";
import jpic from "./../web_design/student_page/students_pics/JaanbaazAkhtar.jpg";
import Profile from './StudentProfileCard';

const StudentProfile = () => {

    return(
        <>
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

                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                        </div>

                        <div id="menu1" class="tab-pane fade">

                        <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                            <Row>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                                <Profile title="Jaanbaaz Akhtar" text="Mca 4th sem" image={jpic}/>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
            
        </>
    );
}

export default StudentProfile;
