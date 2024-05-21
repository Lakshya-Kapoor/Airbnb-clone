const mongoose = require("mongoose");
let data = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  data = data.map((obj) => ({ ...obj, owner: "664c3edd49d3036d04af4d95" }));
  await Listing.insertMany(data);
  console.log("Data was initialized");
};

initDB();
