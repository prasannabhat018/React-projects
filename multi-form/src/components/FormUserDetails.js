import React, { Component } from 'react'

export class FormUserDetails extends Component {

    continue=(e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

    render(props) {
        const {values}=this.props

        return(
            <form className="ClassicForm">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.props.handleChange}
                    value={values.firstName}
                    required
                />
                <br/>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.props.handleChange}
                    value={values.lastName}
                    required
                />
                <br/>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.props.handleChange}
                    value={values.email}
                    required
                />
                <br/>
                <button onClick={this.continue}>Continue</button>
            </form>
        )
    }
}

export default FormUserDetails