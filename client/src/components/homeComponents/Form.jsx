import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import AUTH from '../../utils/AUTH';

function SignupForm() {
  const [userObject, setUserObject] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    redirectTo: null
  });
  const [redirectTo, setRedirectTo] = useState(null);

  const handleChange = (event) => {
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("CLICKED")
    // TODO - validate!
    AUTH.signup({

      name: userObject.name,
      age: userObject.age,
      gender: userObject.gender,
      email: userObject.email,
      password: userObject.password
    }).then(response => {
      // console.log(response);
      if (!response.data.errmsg) {
        setRedirectTo('/');
      } else {
        console.log('duplicate');
      }
    });
  };
  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />
  }

  return (
    <>
      <div className="col-12 col-md-6">
        <h6>New users please fill out the form below to sign up.</h6>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" name="name" value={userObject.name} onChange={handleChange} placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label for="age">Age</label>
            <input type="text" className="form-control" name="age" value={userObject.age} onChange={handleChange} placeholder="Age" />
          </div>
          <div className="btn-group">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Gender
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2"  value={userObject.gender} onChange={handleChange}>
              <button className="dropdown-item" type="button">Male</button>
              <button className="dropdown-item" type="button">Female</button>
              <button className="dropdown-item" type="button">Prefer not to answer</button>
            </div>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={userObject.email} onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter your email" />

          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={userObject.password} onChange={handleChange} placeholder="Enter you password" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="confirmPassword" value={userObject.confirmPassword} onChange={handleChange} placeholder="Re-Enter you password" />
          </div>

          <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-4">Sign Up</button>
        </form>
      </div>
    </>
  )

}
export default SignupForm;