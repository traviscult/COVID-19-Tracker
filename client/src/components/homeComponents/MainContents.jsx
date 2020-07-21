import React from 'react'
import Form from './Form'
import LeftSideBar from './LeftSideBar';

const MainContents = (props) => {
  return (
    <>
      <div className="row">
        <LeftSideBar />
        <Form signUpUser={props.signUpUser}/>
      </div>
    </>
  )
}
export default MainContents;