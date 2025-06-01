const mongoose = require("mongoose");

const tabSwitchSchema = new mongoose.Schema({
   username: String, // can be used as username
  // username: String, // (optional) add this if you want a separate field
  testId: String,
  switchCount: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TabSwitch", tabSwitchSchema);