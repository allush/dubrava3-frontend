import React from 'react'
import Head from "./Head";
import Nav from "./Nav";

const Layout = ({ children }) => (
    <div className="container">
        <Head/>
        <Nav/>
        {children}
    </div>
);

export default Layout
