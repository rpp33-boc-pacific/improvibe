import Link from 'next/link';

export default function LogIn() {
  return (
    <form method="post" action="/api/logIn">
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
  )
}