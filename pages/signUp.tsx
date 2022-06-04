import Link from 'next/link';
import Protect from '../components/Protect';

function SignUp() {
  return (
    <form method="post" action="/api/signUp">
      <h1>Sign Up</h1>
      <label>
        Email
        <input name="email" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign Up</button>
      <p>Already have an account?
        <Link href="/logIn">
          <a> Log In</a>
        </Link>
        </p>
    </form>
  )
}

export default SignUp;
