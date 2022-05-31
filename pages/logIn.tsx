import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import AppContext from '../AppContext';
import userObject from '../userObject';

const LogIn = () => {
  const [userId, updateUser] = useState(-1);
  const router = useRouter();

  //Listens for changes to userId variable then fetches user data and updates the global context.
  useEffect(() => {
   if (userId > -1) {
     fetch(`api/user/${userId}`, {
       method: 'GET',
       headers: {
         'Content-Type': 'applicaton/json',
       }
     }).then ((res) => {
      return res.json();
     })
     .then((res) => {
      updateUser(res.fields);
     })
     .catch((err) => {
      console.log('Error:', err);
     })
   }
  }, [userId])

  //Checks login is value and then updates state with userId and redirects to explorer page
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user:any = {email: e.target[0].value, password: e.target[1].value}

    const response = fetch('/api/logIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
    .catch((err) => {
      console.log('Error:', err);
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