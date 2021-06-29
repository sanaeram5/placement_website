import React from "react";
// Bootstrap Components
// import Css file
import "./Faculty.css";
//import image_quadri from '../images/rsuri.jpg'
import image_quadri from '../images/dr_quadri.jpg'
import image_rizvi from '../images/dr_rizvi.jpg'
import image_monica from '../images/dr_monica.jpg'

import image_kmustafa from '../images/dr_kmustafa.jpg'
import image_abulaish from '../images/dr_abulaish.jpg'
import image_rafat from '../images/Dr_Rafat_Praveen.jpg'

import image_zeeshan from '../images/dr_zeeshan.jpg'
import image_nazir from '../images/dr_nazir.jpg'
import image_rajendra from '../images/Dr__Rajendra.jpg'

import image_Suraiya from '../images/Dr_Suraiya.jpg'
import image_mansaf from '../images/Dr_Mansaf.jpg'
import image_jahir from '../images/Jahir_sir.jpg'

import image_taran from '../images/dr_taran.jpg'
import image_khalid from '../images/dr_khalid.jpg'


import Header from "./Header";

const Faculty = () => {
  return (
    <div>
        <Header />
      <div class="container">
          <div className="faculty-heading">FACULTY PROFILE</div>
          <div className="row mt-4">
            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_quadri} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. SMK QUADRI</div>
                <div className="faculty-designation">Professor and Head of Department (M.Tech, PhD)</div>
                <div className="faculty-exp">Year of Experience: 29</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Software Reliablit engineering,Software testing and Software engineering</div>
                </div>
            </div>
            </div>

            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_rizvi} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Syed Afzal Murtaza Rizvi</div>
                <div className="faculty-designation">Professor (MSc, PhD)</div>
                <div className="faculty-exp">Years of Experience: 30+</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Software Engineering, Automation,Algorithms and Bio-Informatics</div>
                </div>
            </div>
            </div>
            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_monica} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Monica Mehrotra</div>
                <div className="faculty-designation">Professor (MCA, PhD)</div>
                <div className="faculty-exp">Year of Experience: 23</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Data Mining, Social Network Analysis and Information Retrieval</div>
                </div>
            </div>
            </div>
            
          </div>

          <div className="row mt-4">
            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_kmustafa} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. KHURRAM MUSTAFA</div>
                <div className="faculty-designation">Professor (MSc, M.Tech, PhD)</div>
                <div className="faculty-exp">Year of Experience: 20</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">E-Learning,Software Engineering and Software Security</div>
                </div>
            </div>
            </div>

            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_abulaish} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. MOHAMMAD ABULAISH</div>
                <div className="faculty-designation">Professor (MCA, PhD)</div>
                <div className="faculty-exp">Year of Experience: 20</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Data Analytics, Web Intelligence, Security Informatics and Digital Forensics.</div>
                </div>
            </div>
            </div>
            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_rafat} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Rafat Parveen</div>
                <div className="faculty-designation">Associate Professor (MTech, PhD)</div>
                <div className="faculty-exp">Year of Experience: 18</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Bio-Informatics - System Biology and Computional Biology, Computer Networks.</div>
                </div>
            </div>
            </div>
            
          </div>

          <div className="row mt-4">
            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_zeeshan} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Syed Zeeshan Husain</div>
                <div className="faculty-designation">Associate Professor (MCA, PhD)</div>
                <div className="faculty-exp">Year of Experience: 17</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Computer Networks and Security.</div>
                </div>
            </div>
            </div>

            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_nazir} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Mohammad Nazir</div>
                <div className="faculty-designation">Professor (MCA, PhD)</div>
                <div className="faculty-exp">Year of Experience: 16</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Software Engineering,Software Security and Software Quality Assurance</div>
                </div>
            </div>
            </div>
            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_rajendra} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Rajendra Kumar</div>
                <div className="faculty-designation">Professor (MCA, PhD)</div>
                <div className="faculty-exp">Year of Experience: 16</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Information Security, Network Security,WebApp Security and Data Analytics.</div>
                </div>
            </div>
            </div>
            
          </div>


          <div className="row mt-4">
            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_Suraiya} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Suraiya Jabin</div>
                <div className="faculty-designation">Professor (MCA, PhD)</div>
                <div className="faculty-exp">Year of Experience: 15</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Artificial Intelligence, Soft Computing,Biometrics, Computational Biology and Pattern Recognition.</div>
                </div>
            </div>
            </div>

            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_mansaf} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Mansaf Alam</div>
                <div className="faculty-designation">Associate Professor (MCA, PhD)</div>
                <div className="faculty-exp">Year of Experience: 15</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Big Data Analytics and Cloud Computing</div>
                </div>
            </div>
            </div>
            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_jahir} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Jahiruddin</div>
                <div className="faculty-designation">Associate Professor (MCA, PhD)</div>
                <div className="faculty-exp">Year of Experience: 14</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Text Mining and Social Network Analysis.</div>
                </div>
            </div>
            </div>
            
          </div>

          <div className="row mt-4">
            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_taran} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Taran Singh Bharti</div>
                <div className="faculty-designation">Assistant Professor (MCA, MTech, UGC-JRF)</div>
                <div className="faculty-exp">Year of Experience: 9</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Security, Algorithms, Database, Theory of Computation and Distributed Computing</div>
                </div>
            </div>
            </div>
            <div className="col-4">
            <div class="card m-2 faculty-card">
            <img src={image_khalid} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">DR. Khalid Raza</div>
                <div className="faculty-designation">Associate Professor (MCA, MPhil, UGC-JRF, PhD)</div>
                <div className="faculty-exp">Year of Experience: 8</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Soft Computing Techniques, Computational Biology and Machine Learning</div>
                </div>
            </div>
            </div>
            
          </div>



      </div>
    </div>
  );
};

export default Faculty;
