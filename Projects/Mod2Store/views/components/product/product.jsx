import React from 'react'

const {
    productStyle,
    productNavStyle,
    productNavULStyle,
    productNavListStyle,
    productButtonStyle
} = require('../../../styles/showStyle')

const Product = ({ product }) => (
    <div style={productStyle}>
        <div>
            <img src={product.imgPath} alt="preview_img" style={{ width: '200px', height: '200px' }} />
            <h3>${product.price}</h3>
            <h3>{product.stock > 0 ? `Quantity: ${product.stock}` : 'Out of Stock!'}</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ width: '85%', margin: 'auto' }}>{product.name}</h2>
            <p style={{ maxWidth: '50ch', marginLeft: '1rem', maxHeight: '16rem', overflow: 'scroll' }}>{product.description}</p>
            <nav style={productNavStyle}>
                <ul style={productNavULStyle}>
                    <li style={productNavListStyle}><a style={productButtonStyle} href={`${process.env.PRODUCT_API}/edit/${product.name}`}>Edit</a></li>
                    {product.stock > 0 && <li style={productNavListStyle}><a style={productButtonStyle} href={`${process.env.PRODUCT_API}/buy/${product.name}`}>Buy</a></li>}
                    <li style={productNavListStyle}>
                        <a style={productButtonStyle} href={`${process.env.PRODUCT_API}/delete/${product.name}`}>Remove</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
)

export default Product;