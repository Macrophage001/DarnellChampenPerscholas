const products = require('../models/product')

const retrieveIndexPage = (req, resp) => {
    resp.render('index', { products })
}
const retrieveNewProductPage = (req, resp) => {
    //TODO: ...
}
const retrieveEditPage = (req, resp) => {
    //TODO: ...
}
const retrieveShowProductPage = (req, resp) => {
    //TODO: ...
}

const addProduct = (req, resp) => {
    // TODO: ...   
}
const removeProduct = (req, resp) => {
    // TODO: ...   
}
const updateProduct = (req, resp) => {
    // TODO: ...   
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