const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/webiworkTest";
try {
  var db = mongoose.connect(uri, () => {
    console.log("connected successfully..");
  });
} catch {
  console.log("connection time out..");
}

module.exports = db;
