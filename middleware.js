module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "Login to create listing");
    res.redirect("/login");
  }
  next();
};
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // To redirect to the correct page we're creating a variable in req.session
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in for that");
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner.equals(req.user._id)) {
    req.flash("error", "You don't have the permission to do this");
    res.redirect(`/listings/${id}`);
    return;
  }
  next();
};

module.exports.isAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(req.user._id)) {
    req.flash("error", "You are not the author of this review");
    res.redirect(`/listings/${id}`);
    return;
  }
  next();
};
