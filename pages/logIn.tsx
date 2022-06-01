import Link from 'next/link';
import { signIn } from "next-auth/react";

export default function LogIn() {

  const login = async (e: any) => {
    // e.preventDefault();
    await signIn("credentials", {email: "hello", password: "password", callbackUrl: "/"});
  }

  return (
    <form>
      <h1>Login</h1>
      <label>
        Email
        <input name="email" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
        <a onClick={(e) => login(e)}>Sign in</a>
      <p>Dont have an account yet?
        <Link href="/signUp">
          <a> Sign up</a>
        </Link>
        </p>
    </form>
  )
}