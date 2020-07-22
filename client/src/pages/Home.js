import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainContents from '../components/homeComponents/MainContents';
import './Pages.css';
import Navbar from '../components/navigation/Navbar';
import Modal from '../components/homeComponents/Modal';

const Home = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        {/* Note: Delete navbar and p tag after development complete. */}
        <Navbar />
        <p className="text-info mb-4 pt-0 text-center">Home page is the sign in and sign up page, so the navbar is temporary for development purpose only.  </p>

        <div className="homePageContent">
         <h2>Welcome to COVID-19 Tracker App </h2>
    <h5>If you are a registered member, please login. Otherwise sign up below</h5>

          <hr />
        </div>
        <MainContents signUpUser={props.signUpUser} />

        <Footer />
      </div>

    </>
  )
}
export default Home; 