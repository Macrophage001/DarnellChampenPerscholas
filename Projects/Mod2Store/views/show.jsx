import React from 'react'
const Header = require('./components/header')

const { showStyle, productStyle, productNavULStyle, productNavListStyle, productButtonStyle } = require('../styles/showStyle')

const Product = ({ product }) => (
    <div style={productStyle}>
        <div>
            <img src={product.imgPath} alt="preview_img" style={{ width: '200px', height: '200px' }} />
            <h3>${product.price}</h3>
            <h3>Quantity: {product.stock}</h3>
        </div>
        <div>
            <p style={{ maxWidth: '50ch', marginLeft: '1rem' }}>{product.description}</p>
            <nav>
                <ul style={productNavULStyle}>
                    <li style={productNavListStyle}><a style={productButtonStyle} href={`${process.env.PRODUCT_API}/${product.name}/edit`}>Edit</a></li>
                    {/* <li style={productNavListStyle}><a style={productButtonStyle} href={`${process.env.PRODUCT_API}/${product.name}/delete`}>Remove</a></li> */}
                    <li style={productNavListStyle}>
                        <form style={productButtonStyle} action={`${process.env.PRODUCT_API}/${product.name}/delete`} method="POST">
                            <input style={{display: 'none'}} type="text" name='name' value={product.name} readOnly={true}/>
                            <input style={{display: 'none'}} type="text" name='description' value={product.description} readOnly={true}/>
                            <input style={{display: 'none'}} type="text" name='imgPath' value={product.imgPath} readOnly={true}/>
                            <input style={{display: 'none'}} type="number" step={0.01} name='price' value={product.price} readOnly={true}/>
                            <input style={{display: 'none'}} type="number" name='stock' value={product.stock} />
                            <input type="submit" value="Remove" />
                        </form>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
)

const navLinks = [
    { title: 'Home', link: `${process.env.PRODUCT_API}` },
]

const Show = ({ product }) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
            <title>Store App - {product.name}</title>
        </head>
        <body style={showStyle}>
            <Header title={product.name} links={navLinks} />
            <div style={{ position: 'relative' }}>
                <Product product={product} />
            </div>
        </body>
    </html>
)

module.exports = Show