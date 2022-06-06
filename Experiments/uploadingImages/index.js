require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const fs = require('fs');
const path = require('path')
const multer = require('multer');

const imageModel = require('./models/image')

const port = process.env.port || 5000;

const passWord = ''

mongoose.connect(process.env.MONGO_URI.replace('<password>', passWord), { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => console.log('Connected to Mongo!'))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage });

app.get('/', (req, resp) => {
    imageModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            resp.status(500).send('An error occurred: ', err);
        } else {
            resp.render('index', { images: items });
        }
    })
});

app.post('/', upload.single('image'), (req, resp, next) => {
    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imageModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        } else {
            resp.redirect('/');
        }
    })
});

app.listen(port, () => console.log('Listening on port: ' + port));