const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

// Posting new review
router.post("/", isLoggedIn, wrapAsync(reviewController.newReview));

// Delete review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
