import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
  providers: [
    // will be adding third party providers here
  ],
  pages: {
    signIn: '/signIn',
    signUp: '/signUp'
  },

  callbacks: {

  }

})
