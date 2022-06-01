import React from 'react'

const Header = require('./components/header')
const Footer = require('./components/footer')

const newStyle = {
    display: 'flex',
    flexDirection: 'column',

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
    marginTop: '4rem',
    padding: '2rem',

    alignSelf: 'center',
    alignItems: 'center',

    minWidth: '22rem',
    minHeight: '24rem'
}
const formInputStyle = {
    border: '1px solid #B5B5B5',
    width: '14rem',
    margin: '0.25rem 0',
    height: '2rem'
}
const textAreaStyle = {
    ...formInputStyle,
    height: '4rem',
    minHeight: '4rem'
}

const inputSubmitStyle = {
    border: '1px solid #B5B5B5',
    width: '14rem',
    margin: '0.25rem 0',
    height: '2rem'
}

const inputLabelStyle = {
    fontSize: '12px',
    fontWeight: 'bold'
}

const divInputStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
}

const navLinks = [
    { title: 'Home', link: `${process.env.PRODUCT_API}` }
]

const Edit = ({ product }) => (
    <div style={newStyle}>
        <Header title="Edit Product" links={navLinks} />

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

        <Footer />
    </div>
)

module.exports = Edit