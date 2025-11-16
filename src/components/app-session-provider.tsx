/*
  Client-side session provider.

  Analogous JavaScript / PERN mental model:
  ```jsx
  import { SessionProvider } from "next-auth/react";
  export default function App({ Component, pageProps }) {
    return (
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }
  ```

  This component simply wraps NextAuth's SessionProvider so that any child component
  can call useSession() and receive the authenticated user data.
*/
"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode;
};

export function AppSessionProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
