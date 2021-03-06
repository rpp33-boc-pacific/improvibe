import Link from 'next/link';
import { getSession, getProviders, signIn, useSession } from "next-auth/react";
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import AppContext from '../AppContext';

export default function LogIn() {

  const [logInError, setLogInError] = useState(false);
  const {user, setUser} = useContext(AppContext);
  const {songs, setSongs} = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    if (user && Object.keys(user).length) {
      router.push('/');
    }
  }, [user]);

  const checkSession = async (credentials) => {
    const session = await getSession();
      if (session && !credentials) {
        axios.post('/api/auth/logIn', session)
        .then(async (response) => {
          setUser(response.data);
        })
      } else if (session) {
        setUser(session.user);
      }
  }

  const credentialsLogIn = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    signIn('credentials', {email: email, password: password, redirect: false, callbackUrl: '/'})
    .then((status) => {
      if (status && status.error) {
        setLogInError(true);
      } else {
        checkSession(true);
      }
    })
    .catch((err) => {
      console.log(err)
    });
  }

  const googleLogIn = (e) => {
    e.preventDefault();

    signIn('google', {callbackUrl: '/'})
    .then( async () => {
      checkSession(false);
    }).catch((err) => {
      console.log(err);
    })
  }

  const githubLogIn = (e) => {
    e.preventDefault();

    signIn('github', {callbackUrl: '/'})
    .then((status) => {

    })
    .catch((err) => {
      console.log(err)
    });
  }

    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}>
        <form id="credentials" onSubmit={(e) => credentialsLogIn(e)}>
          <FormControl>
            <h1>Login</h1>
            <label htmlFor="email" >Email</label>
            <TextField required id="email" name="email" type="text" variant="outlined" style={{ width: '350px' }} margin="normal"/>

            <label htmlFor="password" placeholder="yourPassword123">Password</label>
            <TextField required id="password" name="password" type="password" variant="outlined" margin="normal"/>

            <Button variant="contained" type="submit" size="large" style={{ marginTop: "20px" }}>Sign in</Button>
              {logInError &&
              <div>
                Email or password invalid, please try again.
              </div>
              }

            <Button variant="contained" type="button" size="large" style={{ marginTop: "20px" }} onClick={(e) => googleLogIn(e)} >Sign in with Google</Button>

            <Button variant="contained" type="button" size="large" style={{ marginTop: "20px" }} onClick={(e) => githubLogIn(e)} >Sign in with Github</Button>
            <p>Dont have an account yet?
              <Link href="/signUp">
                <a> Sign up</a>
              </Link>
              </p>
          </FormControl>
        </form>
      </Grid>
    )
}

LogIn.getInitialProps = async (context) => {
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
    session: undefined,
    providers: await getProviders(),
  };
};