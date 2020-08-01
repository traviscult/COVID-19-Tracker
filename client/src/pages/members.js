import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './Pages.css';
import Assessment from '../components/members/Assessment';
import Navbar from '../components/navigation/Navbar';
import StateSearch from '../components/members/StateSearch';

const Members = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar logout={props.logout} />
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
          <div className="text-center">
            <h5>Disclosure</h5>
        <p>Please be advised the Covid sympotm checker is not a diagnosis, it is for informational purposes only and does not represent, in any way, a qualified medical opinion. </p>
        <p>The symptom checker and its results are entirely based on WHO and CDC guidelines concerning COVID-19 only.</p>
        <p>If this is an emergency, call your local emergency number immediately. Do not proceed with the symptom checker. Medical attention is required immediately.</p>
        <p>Your data is safe. Information that you provide is anonymous and not shared with anyone.</p>
        </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Members; 