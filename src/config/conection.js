var mongoose = require("mongoose");

//connection
mongoose.connect("mongodb://localhost/yaviinfo", { useMongoClient: true});

module.exports = mongoose;