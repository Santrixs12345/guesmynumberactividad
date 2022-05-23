import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props){
        super(props);

        this.state = {
            Number1: '',
            Number2: '',
            Res: ''
        };
    }

    handleOnCkick = e => {
        document 
    }

    handleNumber1Change = e => {
        const {target: {value}} = e; 
        //const Number1 = Array.from(value);
    
        this.setState({
            Number1: value,
        })
    }

    handleNumber2Change = e => {
        const {target: {value}} = e; 
        //const Number2 = Array.from(value);
    
        this.setState({
            Number2: value,
        })
    }

    handleChange = e => {
        this.setState({
            
        })
    }

    render() {
        return (
            <div>
                <input
                    type="number"
                    value={this.state.Number1}
                    onChange={this.handleNumber1Change}
                />
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input
                    type="number"
                    value={this.state.Number2}
                    onChange={this.handleNumber2Change}
                />
                <div>
                    {this.state.Calculator}
                </div>
            </div>
        );
    }
}

export default Calculator;