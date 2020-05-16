import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormUserExtra from './FormUserExtra'

export class UserForm extends Component {
    state={
        step:1,
        firstName:"",
        lastName:"",
        email:'',
        occupation:'',
        city:'',
        bio:'',
    }

    nextStep=()=>{
        this.setState(prev=>({
            ...prev,
            step:prev.step+1
        }))
    }

    prevStep=()=>{
        this.setState(prev=>({
            ...prev,
            step:prev.step-1
        }))
    }

    handleChange=event=>{
        const {name,value}=event.target
        this.setState(prev=>({
            ...prev,
            [name]:value
        }))
    }

    render() {
        const {step}=this.state
        const values=this.state
        switch(step){
            case 1: return(
                <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
            case 2:
                return(
                    <FormUserExtra
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}  
                    />
                )
            default : return(
                <h1>Hello </h1>
            )
        }
    }
}

export default UserForm
