import React from 'react';
import './Modal.css';

const Modal = () => {

  return (
    <div>
      <p>If you are a registered member,  <button id="myBtn" type="button" className="btn loginBtn">Login</button> here.</p>

      {/* <button id="myBtn" type="button" className="btn"><i className="fas fa-user-circle
circleIconTop"></i></button> */}
      <div id="myModal" className="modal text-center">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="modalHeader"><h3>Member Login Portal</h3></div>
          <form>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Email</span>
              </div>
              <input type="email" className="form-control" id="modalEmail" name="email" value={222222} onChange={2} aria-describedby="emailHelp" placeholder="Enter your email" />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Password</span>
              </div>
              <input type="password" className="form-control" id="modalPassword" name="password" value={222222} onChange={2} placeholder="Enter you password" />
            </div>

            <div className="modalLoginBtnWrapper text-center"> <button type="submit" onClick={222222} className="btn modalLoginBtn text-center">LOGIN</button> </div>

          </form>

          <p className="text-dark" className="modalBottomText">COVID-19 Tracker &bull; A Corona Virus information tracking app </p>
        </div>
      </div>

    </div>
  )
}
export default Modal;