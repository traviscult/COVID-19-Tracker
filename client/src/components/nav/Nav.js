import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
// import { Col } from '../Grid';
// import './Nav.css';

const Nav = (props) => {
    let greeting;

    if (props.user === null) {
        console.log(props)
        greeting = <p>Hello guest</p>
    } else if (props.user.name) {
        greeting = (
            <Fragment>
                Welcome back, <strong>{props.user.name}</strong>
            </Fragment>
        )
    } else if (props.user.username) {
        greeting = (
            <Fragment>
                Welcome back, <strong>{props.user.name} </strong>
            </Fragment>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div size="md-6 sm-6">
                <div className="float-right">
                    {greeting} - <Link to="#" className="logout" onClick={props.logout}>Logout</Link>
                </div>
            </div>
        </nav>
    )
};

export default Nav;
