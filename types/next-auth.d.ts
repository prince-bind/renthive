import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
  }

  interface Session {
    user: {
      _id?: string;
      name?: string;
      role?: boolean;
    } & DefaultSession["user"];

  }

  interface JWT {
    id?: string;
    role?: string;
  }
}
