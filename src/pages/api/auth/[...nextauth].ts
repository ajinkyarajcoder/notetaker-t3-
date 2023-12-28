import NextAuth from "next-auth";

import { authOptions } from "notetaker/server/auth";

export default NextAuth(authOptions);
