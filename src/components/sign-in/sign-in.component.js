import React from "react";
import "./sign-in.styles.css";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I have already have an account!</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name="email" type="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label="password" name='password' type="password" value={this.state.password} handleChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;