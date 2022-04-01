import React from 'react';
import "../styles/globals.css";
import { Component } from "react/cjs/react.production.min";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
