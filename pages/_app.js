import Head from "next/head";

import Header from "components/header";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Get a Brand Deal - Brand Emails & YouTube Analytics Profile
        </title>
        <meta
          name="description"
          content="A powerful tool that lets YouTubers send high-quality emails with
          analytics charts to brands."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
