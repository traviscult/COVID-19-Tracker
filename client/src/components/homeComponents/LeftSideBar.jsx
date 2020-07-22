import React from 'react';

const LeftSideBar = () => {
  return (
    <>
      <div className="col-12 col-md-6 leftBar">
        <h5 className="text-center">United States Status: </h5>
        <hr />
        {/* Note: These data will be dynamically updated!  */}
        <ul class="listUl">
          <li className="listTitle"> Confirmed Cases:</li>
          <li className="listNumber"> 3,830,010 </li>
          <li className="listUpdated"> Last Retrieved: <span className="listDate"> 2020-07-21 04:38:46 </span> </li>
          <hr />
          <li className="listTitle"> Recovered:</li>
          <li className="listNumber"> 1,160,087 </li>
          <li className="listUpdated"> Last Retrieved: <span className="listDate"> 2020-07-21 04:38:46 </span> </li>
          <hr />
          <li className="listTitle"> Deaths:</li>
          <li className="listNumber"> 140,906 </li>
          <li className="listUpdated"> Last Retrieved: <span className="listDate"> 2020-07-21 04:38:46 </span> </li>
          <hr />
          <li className="listTitle"> Active Cases:</li>
          <li className="listNumber"> 2,579,942 </li>
          <li className="listUpdated"> Last Retrieved: <span className="listDate"> 2020-07-21 04:38:46 </span> </li>
          <hr />


        </ul>

      </div>
    </>
  )
}
export default LeftSideBar;