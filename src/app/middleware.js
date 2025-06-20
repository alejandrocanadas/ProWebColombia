import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
// This configuration ensures that the authentication middleware applies to all routes
// except for API routes, static files, and Next.js internal files (like _next).