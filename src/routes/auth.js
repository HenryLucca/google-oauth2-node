// import { Router } from "express";
const { Router } = require("express");
// import passport from "passport";
const passport = require("passport");

const router = Router();

router.get("/google", passport.authenticate("google"), (req, res) => {
  res.send(200);
});

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send(200);
});

// export default router;
module.exports = router;
