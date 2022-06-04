import React from "react";
import Providers from "@/components/Providers";
import type { AppProps } from "next/app";

if (process.env.NODE_ENV === "development") {
  require("../mocks/index");
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
