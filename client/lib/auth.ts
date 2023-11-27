import { login } from "@/services/auth.service";
import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  id: string;
  email: string;
  name: string;
  token: string;
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<User | null> {
        console.log("credentials", credentials);

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await login({
            email: credentials.email,
            password: credentials.password,
          });
          console.log("login res>>>", response);

          if (response?.user) {
            return {
              id: response?.user._id,
              email: response?.user.email,
              name: response?.user.userName,
              token: response?.token as string,
            };
          }
          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: User | any }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          token: user.token,
        };
      }
      return token;
    },

    // async session({ session, token }: { session: Session; token: any }) {
    //   session.user.id = token.id;
    //   session.user.token = token.token;
    //   return session;
    // },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
