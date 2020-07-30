import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navigation/Navbar';
import ResultLeft from '../components/resultComponents/ResultLeft';
import '../components/resultComponents/result.css';
import './Pages.css';

const Result = () => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar />

        <h3 className="text-center pageTitle">News and Article Search Result</h3>

        <div className="row resultContentWrapper">

          <ResultLeft />

        </div>
        <Footer />
      </div>
    </>
  )
}
export default Result;