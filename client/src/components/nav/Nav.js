import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {
    let greeting;
    console.log("props in nav", props)
    if (props.user === null) {
        // console.log(props)
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
        <div className="col">
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div size="md-6 sm-6">
                    <div className="float-right">
                        {greeting} - <Link to="#" className="logout" onClick={props.logout}>Logout</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Nav;
