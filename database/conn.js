var mongoose = require('mongoose');
var dotenv = require("dotenv");
dotenv.config().parsed;
mongoose.connect(process.env.DB_URL, { useNewUrlParser: "true",
    useUnifiedTopology: "true" })
    .then(function () {
    console.log("database in started");
})
    .catch(function (e) {
    console.log(e);
});
