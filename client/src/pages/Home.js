import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainContents from '../components/homeComponents/MainContents';

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        {/* Note: delete this div section below after setting is complete! */}
        <div>
          <h1 style={{ textAlign: "center", color: "brown" }}>Welcome to COVID-19 Tracker App </h1> <h5 style={{ textAlign: "center" }}>If you are a registered member, <span id="signIn">Sign In </span> here.</h5>
          <hr />


        </div>
        <MainContents />

        <Footer />
      </div>

    </>
  )
}
export default Home; 