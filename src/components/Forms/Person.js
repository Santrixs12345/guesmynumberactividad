import React, { Component } from 'react';

class Person extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            lastName: '',
            email: '',
            phone: '',

            errors: {
                name: false,
                lastName: false
            }
        }
    }

    handleOnChange = e => {
        const {target: {value, name}} = e;

        this.setState({
            [name]: value
        })

        console.log(value.trim());
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const {name, lastName, email, phone} = this.state;

        this.setState({
            errors: {
                name: name.trim() === '',
                lastName: lastName.trim() === '',
            }
        })

        if(name && lastName){
            const data = {
                name,
                lastName,
                email, 
                phone
            };

            console.log('Data: ', data);
        }
        
    }

    render(){
        return (
            <div className='Person'>

                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>
                            <p><strong>First Name:</strong></p>
                            <input
                                name='name'
                                type="text"
                                value={this.state.name}
                                onCHange={this.handleOnChange}
                                className={
                                    this.state.errors.name ? 'error': ''
                                }
                            />
                        </label>
                        {
                            this.state.errors.name
                            &&
                            <div className='errorMessage'>Required</div>
                        }
                    </div>

                    <div>
                        <label>
                            <p><strong>Last Name:</strong></p>
                            <input
                                name='lastName'
                                type="text"
                                value={this.state.lastName}
                                onCHange={this.handleOnChange}
                                className={
                                    this.state.errors.lastName ? 'error': ''
                                }
                            />
                        </label>
                        {
                            this.state.errors.lastName
                            &&
                            <div className='errorMessage'>Required</div>
                        }
                    </div>

                    <div>
                        <label>
                            <p><strong>Email:</strong></p>
                            <input
                                name='email'
                                type="email"
                                value={this.state.email}
                                onCHange={this.handleOnChange}
                                
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            <p><strong>Phone:</strong></p>
                            <input
                                name='phone'
                                type="tel"
                                value={this.state.phone}
                                onCHange={this.handleOnChange}
                                
                            />
                        </label>
                    </div>
                    <p>
                        <input type="submit" name='Save Information'/>
                    </p>

                </form>

            </div>
        )
    }
    
}