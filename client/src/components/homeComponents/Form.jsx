import React from 'react';

const Form = () => {
  return (
    <>
      <div className="col-12 col-md-6">
        <h6>New users please fill out the form below to sign up.</h6>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />

          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter you password" />
          </div>

          <button type="submit" className="btn btn-primary mb-4">Sign Up</button>
        </form>
      </div>
    </>
  )
}
export default Form;