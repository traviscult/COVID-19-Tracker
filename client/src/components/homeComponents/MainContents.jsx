import React from 'react'
import Form from './Form'
import Login from './Login';

const MainContents = (props) => {
  return (
    <>
      <div className="row">
        <Login login={props.login}/>
        <Form signUpUser={props.signUpUser}/>
      </div>
    </>
  )
}
export default MainContents;