const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    title: {
        type: String,
        default: "New car listed"
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/parked-white-ford-explorer-suv-a4S6KUuLeoM",
        set: (v) => v ===  "" ? "https://unsplash.com/photos/parked-white-ford-explorer-suv-a4S6KUuLeoM" : v,
    },
    price: Number,
    location: String,
});

const Listing = mongoose.model("Listing", carSchema);

module.exports = Listing;