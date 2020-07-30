import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainContents from '../components/homeComponents/MainContents';
import './Pages.css';
import Navbar from '../components/navigation/Navbar';

const Home = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <div className="homePageContent">
          <h2 className="my-5">Welcome to COVID-19 Tracker</h2>
          <h5 className="text-center">If you are a registered member, please login. Otherwise sign up to register.</h5>

          <hr />
        </div>
        <MainContents login={props.login} signUpUser={props.signUpUser} />
        <Navbar />
        <Footer />
      </div>

    </>
  )
}
export default Home; 