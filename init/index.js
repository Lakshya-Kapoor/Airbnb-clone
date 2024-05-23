const mongoose = require("mongoose");
let data = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
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
  data = data.map((obj) => ({ ...obj, owner: "664f50ca711a8ee383cc438b" }));
  await Listing.insertMany(data);
  console.log("Data was initialized");
};

// initDB();
module.exports = initDB;
