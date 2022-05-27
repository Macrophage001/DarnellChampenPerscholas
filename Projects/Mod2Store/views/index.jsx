import React from 'react'

// 'header' class = search bar and nav links
// 'content' class = controls background color
// 'item-listing-grid' = controls the layout of the items on display

const Header = () => {
    const { headerMain, headerStyleTop, headerStyleBottom, navStyle, listStyle, anchorStyle } = require('../styles/headerStyle')
    const navLinks = [
        { title: 'Home', link: '/products' },
        { title: 'New Product', link: '/products/new' }
    ]

    return (
        <div style={headerMain}>
            <div style={headerStyleTop}></div>
            <div style={headerStyleBottom}>
                <nav>
                    <ul style={navStyle}>
                        {navLinks && navLinks.map((link, i) => <li key={i} style={listStyle}> <a style={anchorStyle} href={link.link}>{link.title}</a> </li>)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

const Item = ({ product }) => {
    const { itemStyle, headerStyle, anchorStyle } = require('../styles/itemStyle')

    return (
        <div style={itemStyle(product.imgPath)} className="item-listing">
            <h3 style={headerStyle}>{product.name}</h3>
            <h4 style={headerStyle}>${product.price}</h4>
            <h4 style={headerStyle}>Stock: {product.stock}</h4>
            <a style={anchorStyle} href="#"></a>
        </div>
    )
}

const Content = ({ products }) => {
    const { contentStyle, itemListingGrid } = require('../styles/contentStyle')

    return (
        <div style={contentStyle} className="content">
            <div style={itemListingGrid} className="item-listing-grid">
                {products && products.map((product, i) => <Item key={i} product={product} />)}
            </div>
        </div>
    )
}

const Footer = () => {
    const footerStyle = {
        position: 'relative',
        bottom: '-65vh',
        width: '100%',
        height: '10vh',
        backgroundColor: '#131921'
    }

    return (
        <div style={footerStyle} className="footer"></div>
    )
}

const Index = ({ products }) => {
    const style = {
        margin: '0',
        padding: '0',
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
                    <Header />
                    <Content products={products} />
                    <Footer />
                </div>
            </body>
        </html>
    )
}

export default Index