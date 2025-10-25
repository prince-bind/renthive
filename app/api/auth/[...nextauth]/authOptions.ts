import { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/connectDB";
import { User } from "@/lib/Models"
import { compare } from "bcryptjs"; // assuming passwords are hashed

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB();
                const email = credentials?.email?.toString();
                const password = credentials?.password?.toString();
                if (!email || !password) {
                    throw new Error("Email and password are required");
                }

                const user = await User.findOne({ email }).select("+password");
                if (!user) throw new Error("No user found with this email");

                const isValid = await compare(password, user.password);
                if (!isValid) throw new Error("Incorrect password");

                // Return only safe user fields to session
                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    role: user.role,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.phone = user.phone;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.phone = token.phone;
                session.user.role = token.role;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };