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
            {Data.map(res=>(
           <div className="col-4">
            <div class="card m-2 faculty-card">
                <img src={res.image} className="faculty-img rounded-circle" alt=""/>
                <div className="card-body">
                <div className="faculty-name">{res["faculty-name"]}</div>
                <div className="faculty-designation">{res["faculty-designation"]}</div>
                <div className="faculty-exp">{res["faculty-exp"]}</div>
                <div className="faculty-specialization">Areas of Specialization :</div>
                <div className="spacial-in">{res["faculty-exp"]}</div>
            </div>
            </div>
          </div>))}
</div>



      </div>
    </div>

  )
}
}
export default Faculty;
