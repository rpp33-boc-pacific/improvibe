export default function SignUp() {
  return (
    <form method="post" action="/api/signUp">
      <label>
        Username
        <input name="email" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  )
}