import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const [userObject, setUserObject] = useState({
    email: '',
    password: ''
  });
  const [redirectTo, setRedirectTo] = useState(null);

	const handleChange = (event) => {
    console.log(event.target.value)
		setUserObject({
      ...userObject,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.login({
      email: userObject.email, 
      password: userObject.password,
      isLoggedIn: true
    });
		setRedirectTo('/members');
  };
  
  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />
  }

  return (
    <>
      <div className="col-12 col-md-6">

      <form>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="text" className="form-control" name="email" value={userObject.email} onChange={handleChange} placeholder="Email" />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" name="password" value={userObject.password} onChange={handleChange} placeholder="Password" />
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-4">Sign Up</button>
        </form>

      </div>
    </>
  )
}
export default Login;