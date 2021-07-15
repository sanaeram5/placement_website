import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Coordinators from './components/Coordinators';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Faq from './components/Faq';
import Message from './components/Message';
import Recruiters from './components/Recruiters';
import StudentProfile from './components/StudentProfile';
import Curriculum from './components/Curriculum';

const App=()=>{
    return(
      <>
      <Router>
        {/* <Header/> */}
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/coordinators" exact component={Coordinators}/>
            <Route path="/courses" exact component={Courses}/>
            <Route path="/faculty" exact component={Faculty}/>
            <Route path="/faq" exact component={Faq}/>
            <Route path="/message" exact component={Message}/>
            <Route path="/recruiters" exact component={Recruiters}/>
            <Route path="/student_profile" exact component={StudentProfile}/>
            <Route path="/curriculum" exact component={Curriculum}/>
        </Router>
      </>
    )
};

export default App;