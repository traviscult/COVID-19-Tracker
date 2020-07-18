import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainContents from '../components/homeComponents/MainContents';
import './Pages.css';

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="homePageContent">
         <h2>Welcome to COVID-19 Tracker App </h2>
    <h5>If you are a registered member, <span id="signIn"> Login </span> here.</h5>

          <hr />
        </div>
        <MainContents />

        <Footer />
      </div>

    </>
  )
}
export default Home; 