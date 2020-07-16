const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");

router.use('/auth', authRoutes);

router.get("/", (req, res) => {
  res.send(` <div style="color: brown; text-align: center"> <h1> Server API Router is working! </h1><p>This is coming from server port 3001. The client folder will serve actual UI display where React is running on port 3000. <br />
  This is for router testing purpose only! </div> `);
});


module.exports = router;