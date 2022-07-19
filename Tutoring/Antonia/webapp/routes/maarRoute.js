const fs = require('fs');

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
        // Run database function.
        // const response = await Image.create(encodedImageData, { new: true });
        // const response = await User.findByIdAndUpdate(userId, { avatar: encodedImageData }, { new: true });
        res.send(encodedImageData);
    })
    .get((req, res) => {
        // Get the image schema from the database.
        const img = Image.findById(req.query.id);
        // Send the image back to the client.
        res.send(`data:${img.contentType};base64,${Buffer.from(img.data, 'base64').toString('base64')}`);
    });

module.exports = router;