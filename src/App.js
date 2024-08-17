import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing icons
import Icon1 from './assets/forum-user1.png';
import Icon2 from './assets/forum-user2.png';
import Icon3 from './assets/user-profile3.png';

// importing badges
import Badge1 from './assets/old_membership.png';
import Badge2 from './assets/3to6_classes.png';
import Badge3 from './assets/rating_above4.png';
import Badge4 from './assets/sales_above10.png';
import Badge5 from './assets/fantastic_support.png';
import Badge6 from './assets/forum_top_user.png';
import Badge7 from './assets/best_seller.png';
import Badge8 from './assets/top_seller.png';
import Badge9 from './assets/junior_vendor.png';

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
import InstructorProfile from './components/Intstructors/InstructorProfile';


const App = () => {
  const instructors = [
    {
      _id: 1,
      position: [40.7128, -74.006],
      iconUrl: Icon1,
      name: 'Linda Anderson',
      profile_headline: 'It Technician at IBM',
      rating: '3.8',
      charges: 8000,
      total_hour_tutor: 0,
      skills: ['Management', 'Web Development', 'Mobile Development'],
      about: `Robert started his career as a Unix and Linux System Engineer in 1999. Since that time he has utilized his Linux skills at companies such as Xerox, UPS, Hewlett-Packard, and Amazon.com. Additionally, he has acted as a technical consultant and independent contractor for small businesses and Fortune 500 companies. Robert has professional experience with CentOS, RedHat Enterprise Linux, SUSE Linux Enterprise Server, and Ubuntu. He has used several Linux distributions on personal projects including Debian, Slackware, CrunchBang, and others. In addition to Linux, Jason has experience supporting proprietary Unix operating systems including AIX, HP-UX, and Solaris. He enjoys teaching others how to use and exploit the power of the Linux operating system. He is also the author of the books "Linux for Beginners" and "Command Line Kung Fu.`,
      offer: 10,
      reward_badges: {
        old_membership: true,
        junior_vendor: true,
        expert_vendor: false,
        golden_classes: true,
        king_seller: true,
        best_seller: false,
        top_seller: false,
        funtastic_support: true,
        forums_top_user: true,
      },
    },
    {
      _id: 2,
      position: [34.0522, -118.2437],
      iconUrl: Icon2,
      name: 'Linda Anderson',
      profile_headline: 'It Technician at IBM',
      rating: '3.8',
      charges: 8000,
      total_hour_tutor: 0,
      skills: ['Management', 'Web Development', 'Mobile Development'],
      about: `Robert started his career as a Unix and Linux System Engineer in 1999. Since that time he has utilized his Linux skills at companies such as Xerox, UPS, Hewlett-Packard, and Amazon.com. Additionally, he has acted as a technical consultant and independent contractor for small businesses and Fortune 500 companies. Robert has professional experience with CentOS, RedHat Enterprise Linux, SUSE Linux Enterprise Server, and Ubuntu. He has used several Linux distributions on personal projects including Debian, Slackware, CrunchBang, and others. In addition to Linux, Jason has experience supporting proprietary Unix operating systems including AIX, HP-UX, and Solaris. He enjoys teaching others how to use and exploit the power of the Linux operating system. He is also the author of the books "Linux for Beginners" and "Command Line Kung Fu.`,
      offer: 10,
      reward_badges: {
        old_membership: true,
        junior_vendor: true,
        expert_vendor: false,
        golden_classes: true,
        king_seller: true,
        best_seller: false,
        top_seller: false,
        funtastic_support: true,
        forums_top_user: true,
      },
    },
    {
      _id: 3,
      position: [51.5074, -0.1278],
      iconUrl: Icon3,
      name: 'Linda Anderson',
      profile_headline: 'It Technician at IBM',
      rating: '3.8',
      charges: 8000,
      total_hour_tutor: 0,
      skills: ['Management', 'Web Development', 'Mobile Development'],
      about: `Robert started his career as a Unix and Linux System Engineer in 1999. Since that time he has utilized his Linux skills at companies such as Xerox, UPS, Hewlett-Packard, and Amazon.com. Additionally, he has acted as a technical consultant and independent contractor for small businesses and Fortune 500 companies. Robert has professional experience with CentOS, RedHat Enterprise Linux, SUSE Linux Enterprise Server, and Ubuntu. He has used several Linux distributions on personal projects including Debian, Slackware, CrunchBang, and others. In addition to Linux, Jason has experience supporting proprietary Unix operating systems including AIX, HP-UX, and Solaris. He enjoys teaching others how to use and exploit the power of the Linux operating system. He is also the author of the books "Linux for Beginners" and "Command Line Kung Fu.`,
      offer: 10,
      reward_badges: {
        old_membership: true,
        junior_vendor: true,
        expert_vendor: false,
        golden_classes: true,
        king_seller: true,
        best_seller: false,
        top_seller: false,
        funtastic_support: true,
        forums_top_user: true,
      },
    },
  ];

  const badgeList = [
    { src: Badge1, label: 'Old Membership', key: 'old_membership' },
    { src: Badge2, label: '3 to 6 Classes', key: 'expert_vendor' },
    { src: Badge3, label: 'Classes Rating from 4 to 5', key: 'golden_classes' },
    { src: Badge4, label: 'Sales Above 10', key: 'king_seller' },
    { src: Badge5, label: 'Fantastic Support', key: 'funtastic_support' },
    { src: Badge6, label: 'Forum Top User', key: 'forums_top_user' },
    { src: Badge7, label: 'Best Seller', key: 'best_seller' },
    { src: Badge8, label: 'Top Seller', key: 'top_seller' },
    { src: Badge9, label: 'Has 1 class', key: 'junior_vendor' },
  ];

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

          <Route path="/instructors" element={<Instructors instructors={instructors} badgeList={badgeList} />} />
          <Route path='/instructor/profile/:id' element={<InstructorProfile instructors={instructors} badgeList={badgeList} />} />

        </Routes>
        <Footer />
        
      </Router>
    </Fragment>
  );
};

export default App;
