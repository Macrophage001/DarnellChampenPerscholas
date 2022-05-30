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
    { title: 'Home', link: `${process.env.PRODUCT_API}` }
]

const Edit = ({ product }) => (
    <div style={newStyle}>
        <Header title="Edit Product" links={navLinks} />

        <form style={formStyle} action={`${process.env.PRODUCT_API}/update/${product.name}`} method="POST">
            <input style={formInputStyle} type="text" name='name' value={product.name} />
            <input style={formInputStyle} type="text" name='description' value={product.description} />
            <input style={formInputStyle} type="text" name='imgPath' value={product.imgPath} />
            <input style={formInputStyle} type="number" step={0.01} name='price' value={product.price} />
            <input style={formInputStyle} type="number" name='stock' value={product.stock} />
            <input style={inputSubmitStyle} type="submit" value="Submit" />
        </form>

        <Footer />
    </div>
)

module.exports = Edit