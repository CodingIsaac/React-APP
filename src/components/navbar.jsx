import React, {  Fragment } from "react";

const NavBar = ({totalCounters}) => {
    return (
      <Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="narbar-brand" href="#">
            Navbar {""}
            <span className="badge badge-pill badge-secondary">
              {totalCounters}
            </span>
          </a>
        </nav>
      </Fragment>
    );
    };


export default NavBar;
