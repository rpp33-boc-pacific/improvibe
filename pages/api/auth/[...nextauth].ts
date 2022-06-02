import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "../../../sql/db";
import hash from 'object-hash';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@test.com" },
        password: {  label: "Password", type: "password" }
      },
      authorize(credentials: any) {
      const email = credentials?.email;
      const hashedPassword = hash({email: credentials?.password});

      const checkUserCredentials = `SELECT id, email FROM users WHERE email='${email}' AND hash='${hashedPassword}'`;

      return pool.query(checkUserCredentials)
      .then((user: any) => {
        if (user.rowCount === 0) {
          throw new Error('Invalid email or password');
        } else {
          const loggedInUser = {
            email: user.rows[0].email,
            id: user.rows[0].id
          }
          return loggedInUser;
        }
      }).catch((err: any) => {
        return null;
      });
      }
    })
  ],

  callbacks: {
    jwt({ token, user, account }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    session: ({ session, token, user }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    }
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true
  },
  page: {
    signIn: '/logIn'
  }

})
