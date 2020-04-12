import React from 'react';
import { SignInAndSignUpContainer } from './sign-in-sign-up.styles';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndSignUp = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
); 

export default SignInAndSignUp;