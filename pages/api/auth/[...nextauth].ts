"use client";

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const GoogleAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

export default NextAuth(GoogleAuthOptions);
