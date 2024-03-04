const dotenv = require("dotenv");
const express = require("express");
const authRoutes = require("./src/routes/auth");
const passport = require("passport");

dotenv.config();

require("./src/strategies/google");

async function bootstrap() {
  const app = express();
  const port = process.env.PORT || 3001;

  app.use(passport.initialize());
  // app.use(passport.session());

  app.use("/api/auth", authRoutes);

  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
}

bootstrap();
