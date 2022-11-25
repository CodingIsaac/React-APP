import React, { Component, Fragment } from "react";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="narbar-brand" href="#">
            Navbar{""}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;
