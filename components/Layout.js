import React from 'react'
import Head from "./Head";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({children}) => (
    <>
        <Head/>
        <Nav/>
        {children}
        <Footer/>
    </>
);

export default Layout
