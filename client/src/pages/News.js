import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navigation/Navbar';
import News from '../components/newsComponent/News';
import '../components/newsComponent/news.css';
import './Pages.css';

const Result = () => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar />

        <h3 className="text-center pageTitle">NY Times Articles on COVID-19</h3>

        <div className="row resultContentWrapper">

          <News />

        </div>
        <Footer />
      </div>
    </>
  )
}
export default Result;