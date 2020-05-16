import React, { Component } from 'react'

export class FormUserExtra extends Component {
    continue=(e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

    back=e=>{
        e.preventDefault()
        this.props.prevStep()
    }

    render(props) {
        const {values}=this.props
        return (
            <form className="ClassicForm">
                <input
                    type="text"
                    name="occupation"
                    placeholder="Occupation"
                    onChange={this.props.handleChange}
                    value={values.Occupation}
                />
                <br/>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={this.props.handleChange}
                    value={values.city}
                />
                <br/>
                <input
                    type="text"
                    name="bio"
                    placeholder="bio"
                    onChange={this.props.handleChange}
                    value={values.bio}
                />
                <br/>
                <div class="RowFlexer">
                    <button class="btn2" onClick={this.back}>Back</button>
                    <button  onClick={this.continue}>Continue</button>
                    
                </div>
            </form>
        )
    }
}

export default FormUserExtra
