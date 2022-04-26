import React from 'react'
import '../styles/style.min.css'
import Router from 'next/router'
import 'antd/dist/antd.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
