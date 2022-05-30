const router = require('express').Router()

const {
    retrieveIndexPage,
    retrieveNewProductPage,
    retrieveEditPage,
    retrieveShowProductPage,

    addProduct,
    removeProduct,
    updateProduct,
    buyProduct
} = require('../controllers/productControllers')

router.route('/')
    .get(retrieveIndexPage)
    .post(addProduct)

router.route('/new')
    .get(retrieveNewProductPage)

router.route('/:id')
    .get(retrieveShowProductPage)

router.route('/delete/:id')
    .get(removeProduct)
router.route('/edit/:id')
    .get(retrieveEditPage)
router.route('/update/:id')
    .post(updateProduct)
router.route('/buy/:id')
    .get(buyProduct)

module.exports = router