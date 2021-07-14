import React from "react";
import Header from "./Header";
import "./Home.css";
import logo from "../web_design/MainFinal/logo.png";
import ghalib from "../web_design/MainFinal/galib.jpg";
import messageIcon from "../web_design/MainFinal/message icon.png";
import messageBg from "../web_design/MainFinal/message.png";
import ourTeamIcon from "../web_design/MainFinal/our team icon.png";
import ourTeamBg from "../web_design/MainFinal/our team.png";
import pastRecIcon from "../web_design/MainFinal/past rec icon.png";
import pastRecBg from "../web_design/MainFinal/past recruiter.png";
import studentIcon from "../web_design/MainFinal/student icon.png";
import studentBg from "../web_design/MainFinal/student.png";
import syllabusIcon from "../web_design/MainFinal/syllabus icon.png";
import syllabusBg from "../web_design/MainFinal/syllabus.png";
import teacherIcon from "../web_design/MainFinal/teacher icon.png";
import teacherBg from "../web_design/MainFinal/teacher.png";

export default function Home() {
  return (
    <div>
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        id="hero"
      >
        <div
          className="container-fluid d-flex flex-column justify-content-center align-items-center py-5"
          id="content"
        >
          <div className="row-fluid text-align-center">
            <img className="img-fluid" src={logo} />
          </div>
          <div className="row-fluid text-align-center">
            <h1>MASTER OF COMPUTER APPLICATIONS</h1>
          </div>
          <div className="row-fluid text-align-center">
            <h2>DEPARTMENT OF COMPUTER SCIENCE</h2>
          </div>
          <div className="row-fluid text-align-center">
            <h2>JAMIA MILLIA ISLAMIA</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm-6 d-flex flex-column justify-content-center align-items-center p-3"
          id="ghalib"
        >
          <img className="img-fluid" src={ghalib} />
        </div>
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center p-5">
          <div className="row d-flex flex-sm-row justify-content-start py-3">
            <div className="col-sm-7" id="aboutHeading">
              <h3>About</h3>
              <h3>JAMIA MILLIA ISLAMIA</h3>
            </div>
          </div>
          <div className="row pt-3" id="aboutContent">
            <p>
              Jamia Millia Islamia, established in 1920, is a prestigious
              Central University, located in New Delhi and accredited by NAAC
              under category A. It is an autonomous institution established by
              an act of Parliament and Hon’ble President of India as its
              visitor. Being the embodiment of visionaries like Mahatma Gandhi,
              Moulana Mohammad Ali Jauhar and Dr. Zakir Hussain, this national
              institute epitomizes synthesis of ancient wisdom and modern
              scientific temper.The model of education conceived and enriched by
              its illustrious founder offers refreshing perspective to young
              minds and facilitates the accomplishments of their talents. The
              national ethos of Jamia Millia Islamia is reflected in its richly
              diverse students and teaching community transcending regional,
              ingual, religious, and even national boundaries. Jamia Millia
              Islamia has already played an important role during the Common
              Wealth Games and TOYOTA University Cricket Championship held in
              October 2010 and 2013, respectively.
            </p>
          </div>
          <div className="row d-flex flex-sm-row justify-content-start pt-3">
            <div className="col-sm-5">
              <button type="button" id="aboutButton">
                GO TO WEBSITE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row P-3" id="options">
        <div className="row" id="optionContainer">
          <div className="col-sm-4 p-5 mt-5">
            <Options
              icon={teacherIcon}
              message="TEACHERS' PROFILE"
              backgroundImage={teacherBg}
            />
          </div>
          <div className="col-sm-4 p-5 mt-5">
            <Options
              icon={ourTeamIcon}
              message="OUR TEAM"
              backgroundImage={ourTeamBg}
            />
          </div>
          <div className="col-sm-4 p-5 mt-5">
            <Options
              icon={syllabusIcon}
              message="SYLLABUS"
              backgroundImage={syllabusBg}
            />
          </div>
          <div className="col-sm-4 p-5">
            <Options
              icon={studentIcon}
              message="STUDENTS' PROFILE"
              backgroundImage={studentBg}
            />
          </div>
          <div className="col-sm-4 p-5">
            <Options
              icon={messageIcon}
              message="MESSAGE"
              backgroundImage={messageBg}
            />
          </div>
          <div className="col-sm-4 p-5">
            <Options
              icon={pastRecIcon}
              message="PAST RECRUITERS"
              backgroundImage={pastRecBg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Options(props) {
  return (
    <div
      className="optionsCard d-flex flex-column align-items-center justify-content-center py-5 px-2"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <img className="img-fluid p-2" src={props.icon} />
      <h5 className="py-2">{props.message}</h5>
      <button classname="py-3" type="button">
        SEE MORE
      </button>
    </div>
  );
}