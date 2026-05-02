import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { clerkSignInPath, clerkSignUpPath } from "./lib/clerk";

const isPublicRoute = createRouteMatcher([
  clerkSignInPath,
  `${clerkSignInPath}(.*)`,
  clerkSignUpPath,
  `${clerkSignUpPath}(.*)`,
]);

export default clerkMiddleware(
  async (auth, request) => {
    if (!isPublicRoute(request)) {
      await auth.protect();
    }
  },
  {
    signInUrl: clerkSignInPath,
    signUpUrl: clerkSignUpPath,
  },
);

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
