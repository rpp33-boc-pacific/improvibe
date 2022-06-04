import Link from 'next/link';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function SignUp() {
  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    style={{ minHeight: '100vh' }}>
      <form method="post" action="/api/signUp">
        <FormControl>
        <h1>Sign Up</h1>
        <label htmlFor="email">Email</label>
        <TextField required id="email" name="email" type="text" />
        <label htmlFor="password">Password</label>
        <TextField required id="password" name="password" type="password" />
        <Button variant="contained" type="submit">Sign Up</Button>
        <p>Already have an account?
          <Link href="/logIn">
            <a> Log In</a>
          </Link>
          </p>
        </FormControl>
      </form>
    </Grid>
  )
}

export default SignUp;
