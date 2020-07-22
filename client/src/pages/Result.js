import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navigation/Navbar';
import ResultLeft from '../components/resultComponents/ResultLeft';
import ResultRight from '../components/resultComponents/ResultRight';

const Result = () => {
  return (
    <>
      <Header />
      <Navbar />

      <h3 className="text-center resultPageTitle">Result page contents go here.</h3>

      <div class="container row resultContentWrapper">
        <ResultLeft />
        <ResultRight />

      </div>
      <Footer />

    </>
  )
}
export default Result; 