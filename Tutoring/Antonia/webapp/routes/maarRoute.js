const fs = require('fs');
const { loginUser, signupUser } = require('../controllers/authenticationController');

const router = require('express').Router();
const upload = require('../multerSetup');

router.route('/upload')
    .post(upload.single('file'), (req, res) => {
        const img = fs.readFileSync(req.file.path);
        const encodedImage = Buffer.from(img, 'base64');
        console.log("Encoded Image", encodedImage);
        const encodedImageData = {
            data: encodedImage,
            contentType: req.file.mimetype,
        };
        res.send(encodedImageData);
    })
    .get((req, res) => {
        // Get the image schema from the database.
        const img = Image.findById(req.query.id);
        // Send the image back to the client.
        res.send(`data:${img.contentType};base64,${Buffer.from(img.data, 'base64').toString('base64')}`);
    });

router.route('/login')
    .post(loginUser);
router.route('/signup')
    .post(signupUser);

module.exports = router;