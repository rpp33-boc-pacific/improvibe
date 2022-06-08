import NextAuth from "next-auth";
import pool from "../../../sql/db";
import hash from 'object-hash';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@test.com" },
        password: {  label: "Password", type: "password" }
      },
      authorize(credentials) {
      const email = credentials?.email;
      const hashedPassword = hash({email: credentials?.password});

      const checkUserCredentials = `SELECT id, email FROM users WHERE email='${email}' AND hash='${hashedPassword}'`;

      return pool.query(checkUserCredentials)
      .then((user) => {
        if (user.rowCount === 0) {
          throw new Error('Invalid email or password');
        } else {
          // change this to pull in all user data
          const loggedInUser = {
            email: user.rows[0].email,
            id: user.rows[0].id
          }
          return loggedInUser;
        }
      }).catch((err) => {
        return null;
      });
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],

  callbacks: {
    jwt({ token, user, account }) {
      if (user && account) {
        token.accessToken = account.access_token
        token.user = user;
      }
      return token;
    },

    session: ({ session, token, user }) => {
      if (token) {
        session.user = token.user;
        session.accessToken = token.accessToken;
      }
      return session;
    },

    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === 'google' || account.provider === 'github') {
        console.log(user)
        const sessionToken = account.access_token;
        const checkUserCredentials = `SELECT user_id FROM sessions WHERE sessionToken='${sessionToken}'`;
        return pool.query(checkUserCredentials)
        .then((user) => {
          if (user.rowCount === 0) {
            const addUser = ``

          } else {

          }
          return true;
        })
      }
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        return false
      }
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
