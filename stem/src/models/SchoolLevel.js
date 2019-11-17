var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schoolLevelSchema = new Schema({
    name: String,
    grade: {
      type: Schema.Types.ObjectId,
      ref: "Grade"
    }
})

module.exports = mongoose.model("SchoolLevel", schoolLevelSchema);