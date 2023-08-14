import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
    // secret needed to run nuxt-auth in production mode (used to encrypt data)
    secret: process.env.AUTH_SECRET,
    pages: {
      signIn: '/login'
    },
    providers: [
        // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
        CredentialsProvider.default({
            name: 'Credentials',
            authorize (credentials: any) {
              console.log('got here', credentials)

              const user = { id: '1', name: 'J Smith', username: 'test@email.com', password: 'test1234', image: 'https://avatars.githubusercontent.com/u/25911230?v=4' }

              if (credentials?.username === user.username && credentials?.password === user.password) {
                
                return user
              } else {
                // eslint-disable-next-line no-console
                console.error('Warning: Malicious login attempt registered, bad credentials provided')

                // If you return null then an error will be displayed advising the user to check their details.
                return null
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              }
            }
        })
    ]
})