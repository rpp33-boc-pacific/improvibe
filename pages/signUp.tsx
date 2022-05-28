export default function SignUp() {
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
      <p>Already have an account? <a href="/logIn">Log in</a></p>
    </form>
  )
}