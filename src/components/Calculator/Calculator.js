import React, { Component } from 'react';
import './Calculator.css';


class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            result: 0,
            selector: '',
        }
    }
    
    handleOnChange = e => {
        const {target: {value,name, type}} = e;

        const val = type === 'text'? Number(value) : value;

        this.setState({
            [name]: val
        })
    }

    handleResult = e => {
        const {number1,number2,selector} = this.state;
        this.setState({
            result: calculateResult(number1,number2,selector)
        })
    }

    render() {
        return (
            <div className= "Numbers">
                <h2>Calculadora</h2>
                <div >
                    <input
                        onChange= {this.handleOnChange}
                        name = "number1"
                        type = "text"
                        value = {this.state.number1}
                    />
                    <select className= "Operacion" name="selector" value = {this.state.selector} onChange= {this.handleOnChange} >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <input
                        onChange= {this.handleOnChange}
                        name = "number2"
                        type = "text"
                        value = {this.state.number2}
                    />
                
                </div>
                <div>
                    <button 
                    className = "Calcular"
                    onClick= {this.handleResult}>
                        Calcular
                    </button>
                    <h2 className = "resultado">{this.state.result}</h2>  
                </div>
            </div>
        );
    }
}

function calculateResult(number1,number2,selector){
    switch(selector){
        case "+":
            return Math.round((number1 + number2)*100)/100;
        case "-":
            return Math.round((number1 - number2)*100)/100;
        case "*":
            return Math.round((number1 * number2)*100)/100;
        case "/":
            return Math.round((number1 / number2)*100)/100;
        default:
            return Math.round((number1 + number2)*100)/100;
    }
}

export default Calculator;