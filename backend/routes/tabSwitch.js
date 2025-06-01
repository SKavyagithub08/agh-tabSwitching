const express = require("express");
const router = express.Router();
const TabSwitch = require("../models/TabSwitch");

router.post("/", async (req, res) => {
  console.log("Received tab switch:", req.body); // Add this line
  const { username, testId, switchCount } = req.body;
  try {
    await TabSwitch.findOneAndUpdate(
      { username, testId },
      { switchCount, timestamp: new Date() },
      { upsert: true, new: true }
    );
    res.status(201).json({ message: "Tab switch recorded" });
  } catch (error) {
    console.error(error); // Add this line
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
// This route handles recording the number of times a user switches tabs during a session.