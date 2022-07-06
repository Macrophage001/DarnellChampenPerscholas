const { tryCatch } = require('./util');

// Pulls existing data from db array in model.
const pullFromDBArray = (model, pathFn) => {
    return (...args) => {
        return tryCatch(async () => {
            const { _id } = args[0];
            const updatedModel = await model.findByIdAndUpdate(_id, { $pull: pathFn(model, ...args) }, { new: true });
            return updatedModel;
        })();
    }
}

module.exports = { pullFromDBArray };