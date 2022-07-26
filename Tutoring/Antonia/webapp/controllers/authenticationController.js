const bcrypt = require('bcryptjs');

const loginUser = async (req, res) => {
    const artist = await Artist.findOne({ email: req.body.email });
    if (!artist) {
        res.status(401).send("Invalid Username or Password!");
        return;
    } else {
        const isPasswordCorrect = bcrypt.compareSync(userPassword, hash);
        if (!isPasswordCorrect) {
            res.status(401).send("Invalid Username or Password!");
            return;
        } else {
            // const token = jwt.sign({ userId: artist._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            req.session.user = artist;
            artist.isLoggedIn = true;
            await artist.save();

            res.send(artist);
        }
    }
}

const logoutUser = async (req, res) => {
    req.session.destroy();
    const artist = await Artist.findByIdAndUpdate(req.query.artistId, { isLoggedIn: false }, { new: true });
    res.send(artist);
}

const saltRounds = 10;

const signupUser = async (req, res) => {
    const artist = await Artist.findOne({ email: req.body.email });
    if (artist) {
        res.status(401).send("User already exists!");
        return;
    } else {
        const createdArtist = {
            ...req.body,
            password: await bcrypt.hash(req.body.password, saltRounds)
        }
        const newArtist = await Artist.create(createdArtist);
        res.send(newArtist);
    }
}

const getLoggedInUser = (req, res) => {
    if (req.session.user) {
        res.send(req.session.user);
    } else {
        res.status(401).send("User not logged in!");
    }
}

module.exports = {
    loginUser,
    logoutUser,
    signupUser,
    getLoggedInUser,
}