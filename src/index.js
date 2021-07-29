import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
//importing React Bootstrap Css
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
// import ScrollToTop from './components/scrollToTop';
=======
>>>>>>> 2046840a5651c0db881f2918a60ccb9785bc3cc0

ReactDOM.render(
  <React.StrictMode>
    <Router>
<<<<<<< HEAD
    {/* <ScrollToTop/> */}
    
=======
>>>>>>> 2046840a5651c0db881f2918a60ccb9785bc3cc0
    <App />
    <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
