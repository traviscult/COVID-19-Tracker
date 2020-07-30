import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './Pages.css';
import Assessment from '../components/members/Assessment';
import Navbar from '../components/navigation/Navbar';
import StateSearch from '../components/members/StateSearch';

const Members = () => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar />
        <h3 className="text-center pageTitle">Welcome to members dashboard!</h3>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <Assessment />
            </div>
            <div className="col-sm-12 col-md-7">
              <StateSearch />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Members; 