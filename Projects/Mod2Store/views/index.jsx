import React from 'react'

const Header = require('./components/header')
const Footer = require('./components/footer')

const Item = ({ index, product }) => {
    const { itemStyle, headerStyle, anchorStyle } = require('../styles/itemStyle')

    console.log(`${process.env.PRODUCT_API}/${index}`)

    return (
        <div style={itemStyle(product.imgPath)} className="item-listing">
            <h3 style={headerStyle}>{product.name}</h3>
            <h4 style={headerStyle}>${product.price}</h4>
            <h4 style={headerStyle}>Stock: {product.stock}</h4>
            <a style={anchorStyle} href={`${process.env.PRODUCT_API}/${product.name}`}></a>
        </div>
    )
}

const Content = ({ products }) => {
    const { contentStyle, itemListingGrid } = require('../styles/contentStyle')

    return (
        <div style={contentStyle} className="content">
            <div style={itemListingGrid} className="item-listing-grid">
                {products && products.map((product, i) => <Item key={i} index={i} product={product} />)}
            </div>
        </div>
    )
}

const navLinks = [
    { title: 'Home', link: '#' },
    { title: 'New Product', link: `${process.env.PRODUCT_API}/new` }
]

const Index = ({ products }) => {
    const style = {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#EAEDED'
    }

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
                <title>Store App - Index</title>
            </head>
            <body style={style}>
                <div className="App">
                    <Header title="Store App" links={navLinks} />
                    <Content products={products} />
                    <Footer />
                </div>
            </body>
        </html>
    )
}

export default Index