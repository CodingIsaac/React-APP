import React, { Fragment, Component } from "react";

class Counter extends Component {
  
 
  render() {
    return (
      <Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-md m-2"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-md m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2 "
        >
          Delete
        </button>
      </Fragment>
    );
  }

  getBadgeClasses() {
    let design = "badge m-2 badge-";
    design += this.props.counter.value === 0 ? "warning" : "primary";
    return design;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
