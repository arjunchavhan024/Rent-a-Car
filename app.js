const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/cars";

main().then( () => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    mongoose.connect(MONGO_URL);
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.send("Hi i am root");
});

// Index Route
app.get("/listings", async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", {allListing})
})

// Add route

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs")
})

// Create Route
app.post("/listings", async (req, res) => {
    try {
        const newListing = new Listing(req.body);
        await newListing.save();
        res.redirect("/listings");
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to create listing");
    }
})



app.listen(8080, () => {
    console.log("App is listining to port 8080");
});
