import React from 'react'
// const Header = require('./components/header')

import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import Product from './components/product/product'

const rootStyle = require('../styles/rootStyle')

const navLinks = [
    { title: 'Home', link: `${process.env.PRODUCT_API}` },
]

const Show = ({ product }) => (
    <html>
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
            <title>EZ PC - {product.name}</title>
        </head>
        <body style={rootStyle}>
            <Header title={`EZ PC | Product Information`} links={navLinks} />
            <Content component={
                <div style={{ position: 'relative' }}>
                    <Product product={product} />
                </div>
            } />
            <Footer />
        </body>
    </html>
)

module.exports = Show