const mongoose = require ("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/cars";

main().then( () => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    mongoose.connect(MONGO_URL);
};


const initDB = async () => {
    await Listing.insertMany(initData.data);
    console.log("Data was initialize");
};
  
initDB();