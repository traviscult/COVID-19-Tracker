import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './Pages.css';
import Assessment from '../components/members/Assessment';
import Map from '../components/members/Map';

const Members = () => {
  return (
    <>

      <Header />
      <h1 className="text-center">Members Page</h1>

      <div class="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Assessment />
          </div>
          <div className="col-sm-12 col-md-6">
            <Map />
          </div>
        </div>



        <Footer />
      </div>

    </>
  )
}
export default Members; 