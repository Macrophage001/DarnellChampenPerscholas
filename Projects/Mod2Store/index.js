require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.port || 5000
const productRoute = require('./routes/productRoute')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('assets/'))
app.use('/products', productRoute)

app.listen(port, () => console.log('Listening on port: ' + port));