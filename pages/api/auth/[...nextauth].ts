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
      const hashedPassword = hash(credentials?.password);

      const checkUserCredentials = `SELECT email FROM users WHERE email='${email}' AND hash='${hashedPassword}'`;
      pool.query(checkUserCredentials)
      .then((user: any) => {
        console.log(user);
        if (user.rowCount === 0) {
          throw new Error('Invalid email or password');
        } else {
          return user;
        }
      }).catch((err: any) => {
        return null;
      });
      }
    })
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
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
