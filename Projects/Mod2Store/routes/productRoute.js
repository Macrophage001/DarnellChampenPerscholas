const router = require('express').Router()

const { retrieveIndexPage, retrieveNewProductPage, retrieveEditPage, retrieveShowProductPage,
    addProduct, removeProduct, updateProduct } = require('../controllers/productControllers')

router.route('/')
    .get(retrieveIndexPage)
    .post(addProduct)

router.route('/new')
    .get(retrieveNewProductPage)

router.route('/:id')
    .get(retrieveShowProductPage)
    .post(updateProduct)

router.route('/:id/edit')
    .get(retrieveEditPage)
router.route('/:id/delete')
    .post(removeProduct)

module.exports = router