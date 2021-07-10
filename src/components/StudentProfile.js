import React from "react";
import  "./StudentProfile.css";
import Header from './Header';
import PageHeader from './PageHeader';
import { Container } from "react-bootstrap";
import StudentProfileCard from "./StudentProfileCard";

const StudentProfile = () => {
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
                            <li class="active tab_btn"><a className="btn " data-toggle="tab" href="#home" style={{color:'white', fontSize:'1.1em'}}>BATCH 2019-2022</a></li>
                            <li className="tab_btn"><a className="btn " data-toggle="tab" href="#menu1">BATCH 2020-2022</a></li>
                        </ul>
                    </div>
                

                <div class="tab-content">
                    <div id="home" class="tab-pane fade in active">
                        <h3>HOME</h3>
                        <StudentProfileCard/>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        <h3>Menu 1</h3>
                        <StudentProfileCard/>
                    </div>
                </div>
                </Container>
            </section>
            
        </>
    );
}

export default StudentProfile;
