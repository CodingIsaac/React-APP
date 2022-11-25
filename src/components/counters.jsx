import React, { Component, Fragment } from "react";
import Counter from "./counter";

class Counters extends Component {
 
  render() {
    return (
      <Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset Counters
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          >
            <h2>Open Board</h2>
          </Counter>
        ))}
      </Fragment>
    );
  }
}

export default Counters;
