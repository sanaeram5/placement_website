import React from "react";
// Bootstrap Components
import Header from './Header'
//import Css file
import "./Message.css";

import data from "./data"
class Message extends React.Component{
  constructor(props){
    super(props)
    this.state = {active: data[0]?.id}
  }
  render(){
    let { fullname, image, designation, email, mobile, message } = data.find(facultyData=> facultyData?.id === this.state.active)
  return (
    <div>
          <Header/>

      <div className="content">
        <div className="upper-block">
          <div className="row">
            <div className="col-md-3 col-xs-3">

              <div className="panel panel-primary sidebar">
              
                <div className="panel-body no-padding">
                  <div className="list-group scroll">
                    <div id="faculty" >
                      {data.map(faculty=> (
                      <a className="sublist list-group-item no-vertical-border" onClick={()=>{this.setState({active:faculty.id})}}><strong>{faculty?.fullname}</strong><br/>{faculty.designation}</a>
                      ))}
          
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-xs-9">
              <br/>
              <br/>
            <div>
      
              <img src={image} className="faculty" alt=""/>
              <h3><strong>{fullname}</strong></h3>
              <h4><strong>{designation}</strong></h4><br/>
              <p>
                <strong>E-mail</strong> : {email}<br/>
                <strong>Mobile</strong> : {mobile}<br/>
              </p><br/>
              <strong>Message</strong>
                <p>{message}</p>
           <hr></hr>
           <br></br>
           </div>
           </div>
          </div>
        </div>    
      </div>
    </div>

  );
  }
}

export default Message;
