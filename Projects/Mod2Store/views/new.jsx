import React from 'react'

const Header = require('./components/header')
const Footer = require('./components/footer')

const newStyle = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#EAEDED'
}
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: '4rem auto',

    width: '24rem',
    height: '24rem'
}
const formInputStyle = {
    border: '1px solid #B5B5B5',
    width: '14rem',
    margin: '0.25rem 0',
    height: '2rem'
}
const inputSubmitStyle = {
    border: '1px solid #B5B5B5',
    width: '14rem',
    margin: '0.25rem 0',
    height: '2rem'
}

const navLinks = [
    {title: 'Home', link: '/products'}
]

const New = () => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
            <title>Store App - New Product</title>
        </head>
        <body style={newStyle}>
            <Header title="Submit New Product" links={navLinks} />

            <form style={formStyle} action={process.env.PRODUCT_API} method="POST">
                <input style={formInputStyle} type="text" name='name' placeholder='Name' />
                <input style={formInputStyle} type="text" name='description' placeholder='Description' />
                <input style={formInputStyle} type="text" name='imgPath' placeholder='Image' />
                <input style={formInputStyle} type="number" step={0.01} name='price' placeholder='Price' />
                <input style={formInputStyle} type="number" name='stock' placeholder='Stock' />
                <input style={inputSubmitStyle} type="submit" value="Submit" />
            </form>

            <Footer />
        </body>
    </html>
)

module.exports = New

