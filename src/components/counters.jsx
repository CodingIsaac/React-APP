import React, { Component, Fragment } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;

    return (
      <Fragment>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset Counters
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
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
