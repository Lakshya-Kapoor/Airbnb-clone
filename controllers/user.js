const User = require("../models/user");

module.exports.renderSignUpForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signUpUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.logIn(registeredUser, (err) => {
      if (err) {
        return next(err); // calls the error handling middleware
      }
      req.flash("success", "user was registered");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    let redirectUrl = res.locals.redirectUrl;
    res.redirect(redirectUrl);
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.loginUser = async (req, res) => {
  req.flash("success", "Successfuly logged in");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logOutUser = (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err); // calls the error handling middleware
    }
    req.flash("success", "You are logged out");
    res.redirect("/listings");
  });
};
