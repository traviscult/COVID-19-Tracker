import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Pages.css";
import Assessment from "../components/members/Assessment";
import Navbar from "../components/navigation/Navbar";
import StateSearch from "../components/members/StateSearch";
import AUTH from '../utils/AUTH'

const Members = (props) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AUTH.getUser().then(response => {
        console.log(response.data);
        if (!!response.data.user) {
          setLoggedIn(true);
          setUser(response.data.user);
          console.log("logged in", response.data.user.name)
        } else {
          setLoggedIn(false);
          setUser(null);
          console.log("logged out")
        }
      });

      return () => {
        setLoggedIn(true);
        setUser(user);
      };
  }, []);


  return (
    <>
      <div className="container mainWrapper">
      { loggedIn && (
        <>
        <Header />
        <Navbar logout={props.logout} />
        <h3 className="text-center pageTitle">Welcome to your dashboard!</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <Assessment />
            </div>
            <div className="col-sm-12 col-md-7">
              <StateSearch />
            </div>
          </div>
        </div>
        <Footer />
        </>
        )}
        { !loggedIn && (
        <>
        <Header />
        <Navbar logout={props.logout} />
        <h3 className="text-center pageTitle">Welcome to the guest dashboard!</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <Assessment />
            </div>
            <div className="col-sm-12 col-md-7">
              <StateSearch />
            </div>
          </div>
        </div>
        <Footer />
        </>
        )}
      </div>
    </>
  );
};
export default Members;
