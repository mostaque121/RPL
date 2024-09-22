// app/api/auth/[...nextauth]/route.js
import dbConnect from '@/app/lib/mongodb';
import User from '@/app/Models/User';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Define the authentication options
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // SignIn callback
    async signIn({ user, account }) {
      // Connect to MongoDB
      await dbConnect();

      // Use account.id (provider-specific unique identifier) as identifier
      const identifier = account.providerAccountId;

      // Check if the user already exists in the database
      const existingUser = await User.findOne({ identifier });

      if (!existingUser) {
        // Create a new user in MongoDB if they don't exist
        await User.create({
          name: user.name || 'Unknown', // Default if name is not provided
          email: user.email || '', // Optional if you still want to store it
          image: user.image || '', // Default if image is not provided
          signInProvider: account.provider, // Set the sign-in provider
          identifier, // Unique identifier for the user
          role: 'user', // Set a default role
        });
      }

      return true;
    },

    // JWT callback - store additional user info in the JWT
    async jwt({ token, account, user }) {
      if (account && user) {
        const dbUser = await User.findOne({ identifier: account.providerAccountId });

        // Add additional fields to the JWT
        token.id = dbUser._id.toString(); // Add MongoDB _id to the token
        token.role = dbUser.role;
        token.signInProvider = dbUser.signInProvider;
        token.name = dbUser.name;
        token.image = dbUser.image;
      }

      return token;
    },

    // Session callback - pass the JWT token to the session
    async session({ session, token }) {
      // Attach user details from JWT token to the session
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.signInProvider = token.signInProvider;
      session.user.name = token.name;
      session.user.image = token.image;

      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, 
    updateAge: 0, 
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};


// Create the NextAuth handler
const handler = NextAuth(authOptions);

// Export GET and POST handlers
export { handler as GET, handler as POST };





