var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/movie_login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => console.log("Error in contacting to db"));
db.once("open", () => console.log("Connected"));

const dataSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const DataModel = mongoose.model("Data", dataSchema);

module.exports = DataModel;