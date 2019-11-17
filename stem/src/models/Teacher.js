var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var teacherSchema = new Schema({
    school: {
      type: Schema.Types.ObjectId,
      ref: "School"
    },
    own_no_alpha: String,
    own_no: Number,
    gender: {
      bsonType: "string"
    },
    name: String,
    nrc: {
      type: String,
      unique: true,
      required: true
    },
    dob: Date,
    marriage_status: String,
    father_name: String,
    mother_name: String,
    blood_type: String,
    nationality: String,
    religion: String,
    position: String,
    basic_salary: String,
    department_id: String,
    post_date: Date,
    address: String,
    remove_status: Number
});

module.exports = mongoose.model("Teacher", teacherSchema);