const Learner = require('../../../Labs/firstapi/models/learner')
const { Product, products } = require('../models/product')

const tryCatch = (t, c) => {
    return function () {
        try {
            t(arguments)
        } catch (e) {
            c(e)
        }
    }
}

const retrieveIndexPage = (req, resp) => {
    // resp.render('index', { products })
    tryCatch(async () => {
        let products = await Product.find({})
        resp.render('index', { products })
    }, (e) => console.error('Error: ', e))()
}
const retrieveNewProductPage = (req, resp) => {
    resp.render('new')
}
const retrieveEditPage = (req, resp) => {
    tryCatch(async () => {
        let product = await Product.findOne(dbFilter(req.params.id));
        resp.render('edit', { product })
    }, (e) => console.error('Error: ', e))()
}

const dbFilter = (id) => ({ name: id })
const retrieveShowProductPage = (req, resp) => {
    // console.log(req.params.id)
    // let product = products[req.params.id]
    // resp.render('show', { product })
    tryCatch(async () => {
        let product = await Product.findOne(dbFilter(req.params.id))
        resp.render('show', { product })
    }, (e) => console.error('Error: ', e))()
}

const addProduct = (req, resp) => {
    tryCatch(async () => {
        let result = await Product.create(req.body);
        resp.redirect(process.env.PRODUCT_API)
    }, (e) => console.error('Error: ', e))()
}
const removeProduct = (req, resp) => {
    tryCatch(async () => {
        await Learner.findOneAndDelete(dbFilter(req.params.id))
        resp.redirect(process.env.PRODUCT_API)
    }, (e) => console.error('Error: ', e))()
}
const updateProduct = (req, resp) => {
    tryCatch(async () => {
        let updatedProduct = req.body;
        await Learner.findOneAndUpdate(dbFilter(req.params.id), updatedProduct);
        resp.redirect(process.env.PRODUCT_API)
    }, (e) => console.error('Error: ', e))()
}

module.exports = {
    retrieveIndexPage,
    retrieveNewProductPage,
    retrieveEditPage,
    retrieveShowProductPage,

    addProduct,
    removeProduct,
    updateProduct
}