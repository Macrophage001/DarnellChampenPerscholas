

/**
 * @description - This function is used to add a piece of artwork to an artist.
 * @param {*} req 
 * @param {*} res 
 */
const addArtwork = async (req, res) => {
    const img = fs.readFileSync(req.file.path);
    const encodedImage = Buffer.from(img, 'base64');

    const artwork = {
        id: // Create a new id
            data: encodedImage,
        contentType: req.file.mimetype,
        ...req.body,
    };

    const artist = await Artist.findById(req.query.artistId);
    const newArtworks = [...artist.artworks, artwork];
    await Artist.findByIdAndUpdate(req.query.artistId, { artworks: newArtworks }, { new: true });
};

/**
 * @description - This function is used to update an existing piece of artwork from the artist's collection.
 * @param {*} req 
 * @param {*} res 
 */
const updateExistingArtwork = async (req, res) => {
    let img = null;
    let encodedImage = null;
    let mimetype = null;

    const artist = await Artist.findById(req.query.artistId);
    const artworkToEdit = artist.artworks[req.query.artworkIndex];

    if (req.file) {
        img = fs.readFileSync(req.file.path);
        encodedImage = Buffer.from(img, 'base64');
        mimetype = req.file.mimetype;
    } else {
        encodedImage = artworkToEdit.data;
        mimetype = artworkToEdit.contentType;
    }

    const artwork = {
        data: encodedImage,
        contentType: mimetype,
        ...req.body,
    };

    const modifiedArtwork = { ...artworkToEdit, ...artwork };
    const newArtworks = [...artist.artworks.slice(0, req.query.artworkIndex), modifiedArtwork, ...artist.artworks.slice(req.query.artworkIndex + 1)];
    const updatedArtist = await Artist.findByIdAndUpdate(req.query.artistId, { artworks: newArtworks }, { new: true });

    res.send(updatedArtist);
}