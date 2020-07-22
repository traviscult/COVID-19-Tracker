import React from 'react';
import Header from '../components/header/Header';
// import Nav from '../components/nav'
import Footer from '../components/footer/Footer';
import Navbar from '../components/navigation/Navbar';

const Search = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div class="container text-center">
        <h3> IMO: Since modal will take to the Result page, it looks like we do not need this "Search" page.  </h3>
        <p>The backend code that is calling this page needs to be updated!</p>

      </div>
      <Footer />
    </>
  )
}
export default Search; 