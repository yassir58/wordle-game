

# Features Implemented

 * Users have the option to initiate a Wordle game as a guest.
 * Users can log in to their accounts.
 * Users can view their game statistics.
 * Users can access their game history.
 * Users can access a guide on how to play.
 * Users have the capability to challenge other users to guess a word.
 * Users can toggle between light and dark modes.

 # Approach

- I employed React Context to manage the application's state, opting for simplicity given the nature of the state. To handle backend routes seamlessly, I utilized 'trpc.' For enhanced server-side rendering and optimal performance, I incorporated Next.js Server Components. Authentication was implemented using NextAuth with credentials serving as the primary provider.

# Technologies 

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

# How To Star Project


to start app add these variables to .env file


DATABASE_URL="postgresql://postgres:password123@localhost:6500/wordle?schema=public"
NEXTAUTH_SECRET="b2815fb4bf0bb87b918976137600f741427175426bc6e881313d4594216af0145e41462ed078f40aab7265db5e5999dc2e0f5ee4b097959c22d05578bbbf9534"
NEXTAUTH_URL='http://localhost:3000'

set as empty string the following variables
DISCORD_CLIENT_ID=''
DISCORD_CLIENT_SECRET='lcoze8wfna'

```bash
./start.sh


# wordle-game
