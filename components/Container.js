import React from 'react'
import Footer from "./Footer";

const Container = ({children}) => (
    <>
        <div className={`container main`}>
            {children}
        </div>

        <style jsx>{`
          .main {
            padding-top: 5rem;
          }
        `}</style>
    </>
);

export default Container
