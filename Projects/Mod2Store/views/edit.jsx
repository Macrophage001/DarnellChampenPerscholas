import React from 'react'

import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

const navLinks = [
    { title: 'Home', link: `${process.env.PRODUCT_API}` }
]
const rootStyle = require('../styles/rootStyle')
const {
    formStyle,
    formInputStyle,
    textAreaStyle,
    inputSubmitStyle,
    inputLabelStyle,
    divInputStyle
} = require('../styles/editStyle')

const Edit = ({ product }) => (
    <html>
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
            <title>EZ PC - {product.name} - Edit Information</title>
        </head>
        <body style={rootStyle}>
            <Header title="Edit Product" links={navLinks} />
            <Content component={
                <form style={formStyle} action={`${process.env.PRODUCT_API}/update/${product.name}`} method="POST">
                    <div style={divInputStyle}>
                        <label style={inputLabelStyle} htmlFor="name">Name:</label>
                        <input style={formInputStyle} type="text" name='name' value={product.name} />
                    </div>
                    <div style={divInputStyle}>
                        <label style={inputLabelStyle} htmlFor="description">Description:</label>
                        <textarea style={textAreaStyle} type="text" name='description' value={product.description} />
                    </div>
                    <div style={divInputStyle}>
                        <label style={inputLabelStyle} htmlFor="imgPath">Thumbnail:</label>
                        <input style={formInputStyle} type="text" name='imgPath' value={product.imgPath} />
                    </div>
                    <div style={divInputStyle}>
                        <label style={inputLabelStyle} htmlFor="price">Price:</label>
                        <input style={formInputStyle} type="number" step={0.01} name='price' value={product.price} />
                    </div>
                    <div style={divInputStyle}>
                        <label style={inputLabelStyle} htmlFor="stock">Initial Stock:</label>
                        <input style={formInputStyle} type="number" name='stock' value={product.stock} />
                    </div>
                    <input style={inputSubmitStyle} type="submit" value="Submit" />
                </form>
            } />
            <Footer />
        </body>
    </html>
)

export default Edit