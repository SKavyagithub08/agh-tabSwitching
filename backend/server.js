require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const uri = process.env.MONGO_CONN;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const tabSwitchRoutes = require("./routes/tabswitch");
app.use("/api/tab-switch", tabSwitchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
