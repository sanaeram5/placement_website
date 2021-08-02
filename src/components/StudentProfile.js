import React, {useState} from "react";
import  "./StudentProfile.css";
import Header from './Header';
import PageHeader from './PageHeader';
import { Container, Modal, Button, Card, Row } from "react-bootstrap";
import jpic from "./../web_design/student_page/students_pics/JaanbaazAkhtar.jpg";
import Profile from './StudentProfileCard';
import data1 from './data_student_2019_batch';
import data2 from './data_student_2020_batch';

const StudentProfile = () => {
    const seniorData = data1.students_2019_batch.map((item, index)=>(
        <Profile student={item} key={index}/>
    ));

    const juniorData = data2.students_2020_batch.map((item, index)=>(
        <Profile student={item} key={index}/>
    ))

    return(
        <>
            <section className="container">
                <PageHeader page="Student Profile"/>
            </section>

            <section className="mt-5">
                <Container>
                    <div className="nav_heads">
                        <ul className="nav nav-tabs" id="nav_head" >
                            <li className="active tab_btn"><a className="btn t_btn" data-toggle="tab" href="#home" >BATCH 2019-2022</a></li>
                            <li className="tab_btn"><a className="btn t_btn" data-toggle="tab" href="#menu1">BATCH 2020-2022</a></li>
                        </ul>-
                    </div>

                    <div className="tab-content">
                        <div id="home" className="tab-pane active">

                            <Row>
                                {seniorData} 
                            </Row>    
                        </div>

                        <div id="menu1" className="tab-pane fade">
                            <Row>
                                {juniorData}
                            </Row>
                        
                        </div>
                    </div>
                </Container>
            </section>
            
        </>
    );
}

export default StudentProfile;
