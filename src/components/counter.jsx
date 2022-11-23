import React, { Fragment, Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
     } 
     handleIncrement =() => {
        this.setState({ count: this.state.count +2 })

     }

     handleDecrement =() => {
        this.setState({ count: this.state.count -2 })

     }
    render() { 
        
        return (
            <Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-md m-2' >Increment</button>
                <button onClick={this.handleDecrement} className='btn btn-secondary btn-md m-2'>Decrement</button>

            </Fragment>
        );
    }

    getBadgeClasses() {
        let design = "badge m-2 badge-";
        design += (this.state.count === 0) ? "warning" : "primary";
        return design;
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero': count;

    }
}
 
export default Counter;