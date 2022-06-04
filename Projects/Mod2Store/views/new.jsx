import React from 'react'

import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

const rootStyle = require('../styles/rootStyle')
const {
    formStyle,
    formInputStyle,
    textAreaStyle,
    inputSubmitStyle,
    inputLabelStyle,
    divInputStyle
} = require('../styles/editStyle')

const navLinks = [
    { title: 'Home', link: '/products' }
]


function ProductForm() {
    return (
        <form style={formStyle} action={process.env.PRODUCT_API} method="POST">
            <div style={divInputStyle}>
                <label style={inputLabelStyle} htmlFor="name">Name:</label>
                <input style={formInputStyle} type="text" name='name' />
            </div>
            <div style={divInputStyle}>
                <label style={inputLabelStyle} htmlFor="description">Description:</label>
                <textarea style={textAreaStyle} type="text" name='description' />
            </div>
            <div style={divInputStyle}>
                <label style={inputLabelStyle} htmlFor="imgPath">Thumbnail:</label>
                <input style={formInputStyle} type="text" name='imgPath' />
            </div>
            <div style={divInputStyle}>
                <label style={inputLabelStyle} htmlFor="price">Price:</label>
                <input style={formInputStyle} type="number" step={0.01} name='price' />
            </div>
            <div style={divInputStyle}>
                <label style={inputLabelStyle} htmlFor="stock">Initial Stock:</label>
                <input style={formInputStyle} type="number" name='stock' />
            </div>
            <input style={inputSubmitStyle} type="submit" value="Submit" />
        </form>
    );
}

const add = (x, y) => x + y;


const New = () => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
            <title>EZ PC - New Product</title>
        </head>
        <body style={rootStyle}>
            <Header title="Submit New Product" links={navLinks} />
            <Content component={<ProductForm />} />
            <Footer />
        </body>
    </html>
)

export default New

