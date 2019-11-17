var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var gradeSchema = new Schema({
    no: Number,
    name: String,
    subjects: [{ name: String, description: String }]
});

module.exports = mongoose.model("Grade", gradeSchema);