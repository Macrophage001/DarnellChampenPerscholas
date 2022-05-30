import React from 'react'

const Edit = ({ product }) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
            <title>Store App - Edit Product </title>
        </head>
        <body style={newStyle}>
            <Header title="Edit Product" links={navLinks} />

            <form style={formStyle} action={`${process.env.PRODUCT_API}/${product.name}/edit`} method="POST">
                <input style={formInputStyle} type="text" name='name' value={product.name} />
                <input style={formInputStyle} type="text" name='description' value={product.description} />
                <input style={formInputStyle} type="text" name='imgPath' value={product.imgPath} />
                <input style={formInputStyle} type="number" step={0.01} name='price' value={product.price} />
                <input style={formInputStyle} type="number" name='stock' value={product.stock} />
                <input style={inputSubmitStyle} type="submit" value="Submit" />
            </form>

            <Footer />
        </body>
    </html>
)

module.exports = Edit