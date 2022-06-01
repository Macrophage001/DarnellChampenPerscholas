const { Product } = require('../models/product')

const tryCatch = (t, c = ((e) => console.error('Error: ', e))) => {
    return function () {
        try {
            t(arguments)
        } catch (e) {
            c(e)
        }
    }
}

const retrieveIndexPage = (req, resp) => {
    tryCatch(async () => {
        let products = await Product.find({})
        resp.render('index', { products })
    })()
}
const retrieveNewProductPage = (req, resp) => {
    resp.render('new')
}
const retrieveEditPage = (req, resp) => {
    tryCatch(async () => {
        let product = await Product.findOne(dbFilter(req.params.id));
        resp.render('edit', { product })
    })()
}

const dbFilter = id => ({ name: id })
const retrieveShowProductPage = (req, resp) => {
    tryCatch(async () => {
        let product = await Product.findOne(dbFilter(req.params.id))
        resp.render('show', { product })
    })()
}

const addProduct = (req, resp) => {
    tryCatch(async () => {
        await Product.create(req.body);
        resp.redirect(process.env.PRODUCT_API)
    })()
}
const removeProduct = (req, resp) => {
    tryCatch(async () => {
        await Product.remove(dbFilter(req.params.id))
        resp.redirect(process.env.PRODUCT_API)
    })()
}

const updateProduct = (req, resp) => {
    tryCatch(async () => {
        let updatedProduct = req.body;
        await Product.findOneAndUpdate(dbFilter(req.params.id), updatedProduct);
        resp.redirect(process.env.PRODUCT_API)
    })()
}

const buyProduct = (req, resp) => {
    tryCatch(async () => {
        let product = await Product.findOne(dbFilter(req.params.id))
        if (product.stock > 0) {
            product.stock -= 1
            await Product.findOneAndUpdate(dbFilter(req.params.id), product)
        }
        resp.redirect(`${process.env.PRODUCT_API}/${product.name}`)
    })()
}

module.exports = {
    retrieveIndexPage,
    retrieveNewProductPage,
    retrieveEditPage,
    retrieveShowProductPage,

    addProduct,
    removeProduct,
    updateProduct,
    buyProduct
}