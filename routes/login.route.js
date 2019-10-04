const router = require("express").Router();
const passport = require("passport");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post("/signup", passport.authenticate("local-signup",
  {
  successRedirect: "/index",
    failureRedirect: "/signup",
    failureFlash: true
   })
  
);

router.get("/signin", (req, res, next) => {
  res.render("signin");
});

router.post(
  "/signin",
  passport.authenticate("local-signin", {
    successRedirect: "/index",
    failureRedirect: "/signin",
    failureFlash: true
  })
);

router.get("/index", isAuthenticated, (req, res, next) => {
  res.render("index");
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
}

module.exports = router;
