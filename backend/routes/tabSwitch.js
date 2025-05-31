const express = require("express");
const router = express.Router();
const TabSwitch = require("../models/TabSwitch");

router.post("/", async (req, res) => {
  const { userId, testId, switchCount } = req.body;

  try {
    const entry = new TabSwitch({ userId, testId, switchCount });
    await entry.save();
    res.status(201).json({ message: "Tab switch recorded" });
  } catch (error) {
    console.error("Error saving tab switch:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
// This route handles recording the number of times a user switches tabs during a session.