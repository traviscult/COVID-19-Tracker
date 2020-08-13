import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Members from './pages/members';
import Hospitals from './pages/Hospitals'
import AUTH from './utils/AUTH';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AUTH.getUser().then(response => {
      if (!!response.data.user) {
        setLoggedIn(true);
        setUser(response.data.user);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    });

    return () => {
      setLoggedIn(false);
      setUser(null);
    };
  }, []);

  const logout = (event) => {
    // event.preventDefault();
    console.log("clicked")

    AUTH.logout().then(response => {
      if (response.status === 200) {
        setLoggedIn(false);
        setUser(null);
      }
    });
  };

  const login = (email, password) => {
    AUTH.login(email, password).then(response => {
      if (response.status === 200) {
        // update the state
        setLoggedIn(true);
        setUser(response.data.user);
        return true
      }
      return false
    });
  };

  const signUpUser = (userObject) => {
    // console.log("CLICKED")
    // TODO - validate!
    AUTH.signup({

      name: userObject.name,
      age: userObject.age,
      race: userObject.race,
      gender: userObject.gender,
      email: userObject.email,
      password: userObject.password,
      isLoggedIn: true
    }).then(response => {
      if (!response.data.errmsg) {
        //  console.log("LOGGED")
        setLoggedIn(true);
        setUser(response.data);
      } else {
        //   console.log('duplicate');
      }
    });

  };

  return (
    <>

      <div className="container-fluid mx-0 px-0">
        {!loggedIn && (
          <BrowserRouter>
            <Route exact path="/" component={() => <Home signUpUser={signUpUser} login={login} />} />
            <Route exact path="/news" component={News} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/hospitals" component={Hospitals} />
          </BrowserRouter>
        )}

        {loggedIn && (
          <BrowserRouter>
            <Route exact path="/" component={() => <Members logout={logout}/>} />
            <Route exact path="/news" component={() => <News logout={logout}/>} />
            <Route exact path="/members" component={() => <Members logout={logout}/>}  />
            <Route exact path="/hospitals" component={() => <Hospitals logout={logout}/>}  />
          </BrowserRouter>
        )}
      </div>
    </>
  );
}
export default App;
