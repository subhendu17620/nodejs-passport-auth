const express = require("express");
const router = express.Router();

router.get("/profile", (req, res, next) => {
  res.json({
    message: "You are a authorized user.",
    user: req.user,
    token: req.query.token,
  });
});

module.exports = router;
