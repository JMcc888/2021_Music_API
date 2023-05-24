const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

const connectDB = async () => {
  const con = await mongoose.connect(process.env.DB_URI, {});
};

module.exports = connectDB;
