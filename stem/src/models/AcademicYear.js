var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var academicYearSchema = new Schema({
    year: {
      type: String,
      required: true
    }
});


module.exports = mongoose.model("AcademicYear", academicYearSchema);