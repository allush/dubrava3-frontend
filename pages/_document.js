import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="ru" className="h-100">
                <Head />
                <body className="d-flex flex-column h-100">
                    <Main/>
                    <NextScript />
                </body>

                <style jsx global>{`
                   #__next {
                    height: 100%!important;
                    flex-direction: column!important;
                    display: flex!important; 
                    }
                 `}
                </style>
            </Html>
        )
    }
}

export default MyDocument