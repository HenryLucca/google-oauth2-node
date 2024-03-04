// import passport from "passport";
const passport = require("passport");
// import { Strategy } from "passport-google-oauth20";
const { Strategy } = require("passport-google-oauth20");

const dotenv = require("dotenv");
dotenv.config();

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URI,
      scope: [
        "email",
        "profile",
        // "https://www.googleapis.com/auth/youtube",
        // "https://www.googleapis.com/auth/youtube.force-ssl",
      ],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      done(null, { username: profile.displayName });
    }
  )
);
