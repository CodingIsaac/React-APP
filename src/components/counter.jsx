import React, { Fragment, Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.value,
     } 
     handleIncrement =() => {
        this.setState({ value: this.state.value +2 })

     }

     handleDecrement =() => {
        this.setState({ value: this.state.value -2 })

     }
    render() { 
        
        
        
        return (
            <Fragment>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-md m-2' >Increment</button>
                <button onClick={this.handleDecrement} className='btn btn-secondary btn-md m-2'>Decrement</button>

            </Fragment>
        );
    }

    getBadgeClasses() {
        let design = "badge m-2 badge-";
        design += (this.state.value === 0) ? "warning" : "primary";
        return design;
    }

    formatCount() {
        const { value } = this.state
        return value === 0 ? 'Zero': value;

    }
}
 
export default Counter;