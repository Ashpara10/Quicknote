import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import AuthCheck from "../components/AuthCheck";
import Layout from "../components/layout";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <AuthCheck>
          <Component {...pageProps} />
        </AuthCheck>
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
