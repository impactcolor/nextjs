import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'flexslider/flexslider.css';
import 'font-awesome/css/font-awesome.min.css';
import '../public/template.css';
// import '../public/plugins/jquery/jquery-1.12.4.min.js';
// import '../plugins/jquery/jquery.flexslider-min.js';


// this default export is required in a enw file
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
