import UserModel, { UserDocument } from './../../models/User';
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from "#auth";
import * as bcrypt from 'bcrypt';
import { ISODateString, Session } from 'next-auth';

export default NuxtAuthHandler({
    // secret needed to run nuxt-auth in production mode (used to encrypt data)
    secret: process.env.AUTH_SECRET,
    pages: {
      signIn: '/sign-in'
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
            async authorize (credentials: any) {
              console.log('got here', credentials)

              const user: UserDocument | null = await UserModel.findOne({email: credentials?.email})
              if (user && bcrypt.compareSync(credentials.password, user.password)) {
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
    ],
    callbacks: {
      async jwt({token, user}) {
        if (user) {
          token.user = user;
        }
        return token;
      },
      async session({session, token}): Promise<Session | {user: UserDocument, expires: ISODateString}> {
        session.user = token.user as UserDocument;
        return session;
      },
      
    }
})