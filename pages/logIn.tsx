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

  const router = useRouter();

  useEffect(() => {
    if (Object.keys(user).length) {
      console.log('context', user)
      router.push('/');
    }
  }, [user]);

  const checkSession = async () => {
    const session = await getSession();
      if (session) {
        axios.post('/api/auth/logIn', session)
        .then(async (response) => {
          setUser(response.data);
        })
      }
  }

  const credentialsLogIn = (e: any) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    signIn('credentials', {email: email, password: password, redirect: false, callbackUrl: '/'})
    .then((status: any) => {
      if (status && status.error) {
        setLogInError(true);
      } else {
        checkSession();
      }
    })
    .catch((err) => {
      console.log(err)
    });
  }

  const googleLogIn = (e: any) => {
    e.preventDefault();

    signIn('google', {callbackUrl: '/'})
    .then( async () => {
      checkSession();
    }).catch((err) => {
      console.log(err);
    })
  }

  const githubLogIn = (e: any) => {
    e.preventDefault();

    signIn('github')
    .then((status: any) => {
      checkSession();
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
            <TextField required id="email" name="email" type="text" variant="outlined"/>

            <label htmlFor="password" placeholder="yourPassword123">Password</label>
            <TextField required id="password" name="password" type="password" variant="outlined"/>

            <Button variant="contained" type="submit" >Sign in</Button>
              {logInError &&
              <div>
                Email or password invalid, please try again.
              </div>
              }

            <Button variant="contained" type="button" onClick={(e) => googleLogIn(e)} >Sign in with Google</Button>

            <Button variant="contained" type="button" onClick={(e) => githubLogIn(e)} >Sign in with Github</Button>
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

LogIn.getInitialProps = async (context: any) => {
  const { req, res } = context;
  const session = await getSession({ req });
  // if (session && res) {
  //   res.writeHead(302, {
  //     Location: "/",
  //   });
  //   res.end();
  //   return;
  // }

  return {
    session: undefined,
    providers: await getProviders(),
  };
};