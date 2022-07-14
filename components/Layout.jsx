import React, { Children } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ( {children} ) => {
  return (
    <div className="Layout">
      <head>
        <title>theGlacial Store</title>
      </head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout