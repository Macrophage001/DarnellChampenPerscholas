import React from 'react'
const Header = require('./components/header')

const { showStyle, productStyle, productNavULStyle, productNavListStyle, productButtonStyle } = require('../styles/showStyle')

const Product = ({ product }) => (
    <div style={productStyle}>
        <div>
            <img src={product.imgPath} alt="preview_img" style={{ width: '200px', height: '200px' }} />
            <h3>${product.price}</h3>
            <h3>{product.stock > 0 ? `Quantity: ${product.stock}` : 'Out of Stock!'}</h3>
        </div>
        <div>
            <p style={{ maxWidth: '50ch', marginLeft: '1rem' }}>{product.description}</p>
            <nav>
                <ul style={productNavULStyle}>
                    <li style={productNavListStyle}><a style={productButtonStyle} href={`${process.env.PRODUCT_API}/edit/${product.name}`}>Edit</a></li>
                    {product.stock > 0 && <li style={productNavListStyle}><a style={productButtonStyle} href={`${process.env.PRODUCT_API}/buy/${product.name}`}>Buy</a></li>}
                    <li style={productNavListStyle}><a style={productButtonStyle} href={`${process.env.PRODUCT_API}/delete/${product.name}`}>Remove</a></li>
                </ul>
            </nav>
        </div>
    </div>
)

const navLinks = [
    { title: 'Home', link: `${process.env.PRODUCT_API}` },
]

const Show = ({ product }) => (
    <body style={showStyle}>
        <Header title={product.name} links={navLinks} />
        <div style={{ position: 'relative' }}>
            <Product product={product} />
        </div>
    </body>
)

module.exports = Show