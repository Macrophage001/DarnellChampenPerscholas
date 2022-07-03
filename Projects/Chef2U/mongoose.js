const initMongoose = (password) => {
    const mongoose = require('mongoose');
    const db = mongoose.connection;

    mongoose.connect(process.env.MONGO_URI.replace('<password>', password), { useNewUrlParser: true }, () => console.log("MongoDB Connection Established!", process.env.MONGO_URI));
    db.on('error', err => console.log(err.message, ' MongoDB not running!'));
    db.on('disconnected', () => console.log('MongoDB disconnected!'));
}

module.exports = initMongoose;