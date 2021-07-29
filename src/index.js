import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
//importing React Bootstrap Css
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import ScrollToTop from './components/scrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    {/* <ScrollToTop/> */}
    <App />
    <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
