import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

/*
 Minimal NextAuth handler.

 JavaScript equivalent:
 const handler = NextAuth({ providers: [Credentials({ ... })] })
*/
const handler = NextAuth({
  providers: [
    Credentials({
      name: "Token Login",
      credentials: {
        token: {
          label: "Initial Auth Token",
          type: "password",
          placeholder: "__initial_auth_token",
        },
      },
      async authorize(credentials) {
        const providedToken = credentials?.token?.trim() ?? "";
        const expectedToken = process.env.INITIAL_AUTH_TOKEN ?? "";

        if (
          providedToken.length > 0 &&
          expectedToken.length > 0 &&
          providedToken === expectedToken
        ) {
          // JS equivalent: return { id: "seed-user" }
          console.info("Auth success via initial token");
          return { id: "seed-user" };
        }

        // JS equivalent: return { id: `guest-${Date.now()}` }
        console.info("Falling back to guest session");
        return { id: `guest-${Date.now().toString()}` };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
