import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.util"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/firebase.util"


import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({email: '', password: ''});
        }
        catch(err )
        {
            console.log(err.message);
        }
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render () {
        return (
            <div className = 'sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type='email'   
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required />

                
                    <FormInput 
                        name="password" 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required />

                    <div className='buttons'>
                        <CustomButton type='submit'> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with GOOGLE </CustomButton>
                    </div>
                    
                </form>
            </div>

        )
    }
}

export default SignIn;