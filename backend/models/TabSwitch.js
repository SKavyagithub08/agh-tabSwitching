const mongoose = require("mongoose");

const tabSwitchSchema = new mongoose.Schema({
   username: String,
  testId: String,
  switchCount: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TabSwitch", tabSwitchSchema);