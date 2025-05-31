const mongoose = require("mongoose");

const tabSwitchSchema = new mongoose.Schema({
  userId: String,
  testId: String,
  switchCount: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TabSwitch", tabSwitchSchema);
// the number of times a user switches tabs during session.