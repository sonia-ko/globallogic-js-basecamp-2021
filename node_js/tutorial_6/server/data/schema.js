// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const CitySchema = new Schema({
//     id: { type: String, required: false },
//     name: { type: String, required: false },
//     settled: { type: Number, required: false },
//     picture: { type: String, required: false },
//     places: { type: String, required: false },
//     description: { type: String, required: false },
//     country: { type: String, required: false },
//     // visited: { type: Boolean, required: false },
// });

// module.exports = mongoose.model("cities", CitySchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    id: { type: String, required: false },
    name: { type: String, required: false },
    settled: { type: Number, required: false },
    picture: { type: String, required: false },
    places: { type: String, required: false },
    description: { type: String, required: false },
    country: { type: String, required: false },
}, {
    bufferCommands: false,
    capped: { size: 1000000, max: 100 },
});

module.exports = mongoose.model("cities", CitySchema);