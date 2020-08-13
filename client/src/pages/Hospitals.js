import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";
import HospitalComp from "../components/hospitals/HospitalComp";
import "../components/hospitals/hospital.css";

const HospitalsPage = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar logout={props.logout} />
        <HospitalComp />
        <Footer />
      </div>
    </>
  );
};
export default HospitalsPage;
