import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
      const email = req.body.email;
      const hashedPassword = hash({email: req.body.password});

      const checkUserCredentials = `SELECT email FROM users WHERE email='${email}' AND hash='${hashedPassword}'`
      pool.query(checkUserCredentials)
      .then((user) => {
        console.log(user);
        if (user.rowCount === 0) {
          throw new Error('Invalid email or password');
        } else {
          return user;
        }
      }).catch((err) => {
        console.log(err)
      });
      }
    })
  ],
  pages: {
    signIn: '/signIn',
    signUp: '/signUp'
  },

  callbacks: {

  }

})
