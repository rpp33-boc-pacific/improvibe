import { useState, useEffect } from 'react';
import Link from 'next/link';
import loginHandler from '/Users/caitlinwinters/Coding/Immersive/improvibe/pages/api/logIn';
import { useRouter } from 'next/router';
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import AppContext from '../AppContext';
import userObject from '../userObject';

const LogIn = () => {
  const [userId, updateUser] = useState(-1);
  const router = useRouter();

  //the userId state has been updated
  useEffect(() => {
   console.log('User id from state in login page', userId)
   userObject.id = userId;

  }, [userId])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user:any = {email: e.target[0].value, password: e.target[1].value}

    const response = fetch("/api/logIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    })
    .then((res) => {
      if (res.statusText === 'Created') {
        return res.json();
      } else {
        router.push('/signUp')
      }
    })
    .then((res) => {
      const id = res[0].id;
      updateUser(id)
      router.push('/explorerpage')
    })
    .catch((error) => {
      console.log('Error:', error);
    })
  }

  return (
    <AppContext.Provider value={userId}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Email
          <input name="email" type="text" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit">Sign in</button>
        <p>Dont have an account yet?
          <Link href="/signUp">
            <a> Sign up</a>
          </Link>
          </p>
      </form>
    </AppContext.Provider>
  )
};

export default LogIn;