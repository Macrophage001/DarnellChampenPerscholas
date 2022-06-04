import React from 'react'

import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import ItemListing from './components/product/itemListing'

const rootStyle = require('../styles/rootStyle');

const navLinks = [
    { title: 'New Product', link: `${process.env.PRODUCT_API}/new` }
]

const Index = ({ products }) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
            <title>EZ PC - Computer Parts</title>
        </head>
        <body style={rootStyle}>
            <Header title="EZ Parts" links={navLinks} />
            <Content component={
                <ItemListing products={products} />
            } />
            <Footer />
        </body>
    </html>
)


export default Index