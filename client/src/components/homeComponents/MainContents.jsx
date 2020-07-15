import React from 'react'
import Form from './Form'
import LeftSideBar from './LeftSideBar';

const MainContents = () => {
  return (
    <>
      <div className="row">
        <LeftSideBar />
        <Form />
      </div>
    </>
  )
}
export default MainContents;