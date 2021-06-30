import React from "react";
import "./Faculty.css";
import Data from "./Data";
import Header from "./Header";

class Faculty extends React.Component {
  render(){
    
  return (
    <div>
        <Header />
      <div class="container">
          <div className="faculty-heading">FACULTY PROFILE</div>
          <div className="row mt-4">
            <div className="col-4">
            <div class="card m-2 faculty-card">
                {/* <img src={image_quadri} className="faculty-img rounded-circle" alt=""/> */}
                <div className="card-body">
                <div className="faculty-name">DR. SMK QUADRI</div>
                <div className="faculty-designation">Professor and Head of Department (M.Tech, PhD)</div>
                <div className="faculty-exp">Year of Experience: 29</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">Software Reliablit engineering,Software testing and Software engineering</div>
            </div>
            </div>
          </div>
</div>



      </div>
    </div>
  );
};
}
export default Faculty;
