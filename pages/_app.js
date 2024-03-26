import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
//To not get Type ERROR "self-signed certificate in certificate chain" while fetching data from Firebase
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
}
