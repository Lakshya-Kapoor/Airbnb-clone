const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewListingsForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.renderListing = async (req, res) => {
  let id = req.params.id;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  res.render("listings/show.ejs", { listing });
};

module.exports.createNewListing = async (req, res, next) => {
  let { path, filename } = req.file;
  let listing = req.body.listing;
  if (!listing) throw new ExpressError(400, "Send Valid Data For Listing");
  const newListing = new Listing(listing);
  newListing.image = { url: path, filename: filename };
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "New listing created"); // Flashing a success message to /listings route
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, req.body.listing);
  if (typeof req.file !== "undefined") {
    let { path, filename } = req.file;
    listing.image = { url: path, filename: filename };
    await listing.save();
  }
  req.flash("success", "Listing updated");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
