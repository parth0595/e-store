import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
// import { providers } from "next-auth/client";

let id = '23418515427-mqh54ul3fogei702euros4ri35o0kjrf.apps.googleusercontent.com'
let secret = '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'
// console.log('id ', process.env.GOOGLE_CLIENT_ID)

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: id,
      clientSecret: secret
    })
    // add more providers
  ]
})