import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navigation/Navbar';
import ResultLeft from '../components/resultComponents/ResultLeft';
import '../components/resultComponents/result.css';

const Result = () => {
  return (
    <>
      <Header />
      <Navbar />

      <h3 className="text-center resultPageTitle">News and Article Search Result</h3>

      <div className="row resultContentWrapper">

        <ResultLeft />

      </div>
      <Footer />

    </>
  )
}
export default Result;