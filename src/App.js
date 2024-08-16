import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Navbar from './components/Layout/Header/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import WebDevelopment from './components/CategoryPages/Development/WebDevelopment';
import Management from './components/CategoryPages/Business/Management';
import Marketing from './components/CategoryPages/Marketing/Marketing';
import Courses from './components/Courses/Courses';
import Products from './components/Products/Products';
import Forums from './components/Forums/Forums';
import Instructors from './components/Intstructors/Instructors';

const App = () => {
  return (
    <Fragment>
      <Router>
        
        <Header />
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/webdevlopment" element={<WebDevelopment />} />
          <Route path="/management" element={<Management />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/products" element={<Products />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/instructors" element={<Instructors />} />

        </Routes>
        <Footer />
        
      </Router>
    </Fragment>
  );
};

export default App;
