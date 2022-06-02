import Link from 'next/link';
import { getCsrfToken, getSession, getProviders, signIn } from "next-auth/react";
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function LogIn({ providers }) {

  const [logInError, setLogInError] = useState(false);
  const router = useRouter();

  const credentialsLogIn = (e: any) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    signIn('credentials', {email: email, password: password, redirect: false, callbackUrl: '/'})
    .then((status) => {
      if (status.error) {
        setLogInError(true);
      } else {
        router.push('/');
      }
    })
    .catch((err) => {
      console.log(err)
    });
  }

  return (
    <form id="credentials" onSubmit={(e) => credentialsLogIn(e)}>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <h1>Login</h1>
      <label>
        Email
        <input name="email" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
        <button type="submit" >Sign in</button>
        {logInError &&
        <div>
          Email or password invalid, please try again.
        </div>
        }
      <p>Dont have an account yet?
        <Link href="/signUp">
          <a> Sign up</a>
        </Link>
        </p>
    </form>
  )
}

LogIn.getInitialProps = async (context: any) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
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