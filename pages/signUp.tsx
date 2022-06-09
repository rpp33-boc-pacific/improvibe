import React, { useState } from 'react';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { getSession } from "next-auth/react";
import axios from 'axios';

function SignUp() {

  const [signUpMessage, setSignUpMessage] = useState('');

  const credentialsSignUp = (e: any) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    axios.post('/api/auth/signUp', {
      email: email,
      password: password
    })
    .then((response) => {
      if (response.data === "Your account has successfully been created") setSignUpMessage("success");
    })
    .catch((err) => {
      if (err.response.data === "User already exists with this email address"){
        setSignUpMessage("account already exists");
      } else {
        setSignUpMessage("failed");
      }
    })
  }

    return (
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}>
        <form onSubmit={(e) => credentialsSignUp(e)}>
          <FormControl>
          <h1>Sign Up</h1>
          <label htmlFor="email">Email</label>
          <TextField required id="email" name="email" type="text" />
          <label htmlFor="password">Password</label>
          <TextField required id="password" name="password" type="password" />
          <Button variant="contained" type="submit">Sign Up</Button>

          {signUpMessage === "success" &&
            <div>
              Your account was created successfully. Try logging in.
            </div> }

            {signUpMessage === "account already exists" &&
            <div>
              An account already exists with this email address.
            </div>}

            {signUpMessage === "failed" &&
            <div>
              Error: please try again.
            </div>}

          <p>Already have an account?
            <Link href="/logIn">
              <a> Log In</a>
            </Link>
            </p>
          </FormControl>
        </form>
      </Grid>
    )
}

export default SignUp;

SignUp.getInitialProps = async (context: any) => {
  const { req, res } = context;
  const session = await getSession({ req });
  if (session && res) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    session: undefined
  };
};