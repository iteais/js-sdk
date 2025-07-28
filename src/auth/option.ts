import { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import * as process from 'node:process'
import retryFetch from '../utils/retry-fetch'

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        return { ...token, user: { ...user as User } }
      }

      return token
    },
    async session({ session, token }) {
      return { ...session, user: token.user }
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { type: 'string' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        const r = await retryFetch(`${process.env.USER_SERVER}/auth/login`, {
          method: 'POST',
          body: JSON.stringify({ login: credentials.username, password: credentials.password }),
        })

        const body = await r.json()

        // const { username, password } = credentials
        //
        // // Replace with real authentication here
        // const ok = username === 'Username' && password === 'Password'
        //

        if (!r.ok) {
          throw new Error("dict.login.message.auth_failed")
        }

        return body

        // throw new Error('Some error')
        //
        // return {
        //   id: 1,
        //   name: 'Name',
        //   username: 'Username',
        //   email: 'user@email.com',
        //   avatar: '/assets/img/avatars/8.jpg',
        // }
      },
    }),
  ],
}
