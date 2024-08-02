import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Navbar from './components/Layout/Header/Navbar';

const App = () => {
  return (
    <Fragment>
      <Router>
        
        <Header />
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
        
      </Router>
    </Fragment>
  );
};

export default App;
