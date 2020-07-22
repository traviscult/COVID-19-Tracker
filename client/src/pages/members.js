import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './Pages.css';
import Assessment from '../components/members/Assessment';
import Map from '../components/members/Map';
import Navbar from '../components/navigation/Navbar';

const Members = () => {
  return (
    <>
      <Header />
      <Navbar />
      <h3 className="text-center membersPageTitle">Welcome to members dashboard!</h3>

      <div class="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <Assessment />
          </div>
          <div className="col-sm-12 col-md-7">
            <Map />
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
export default Members; 