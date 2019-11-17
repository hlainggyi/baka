var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schoolSchema = new Schema({
    name: String,
    email: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        required: true
    },
    slogram: String,
    description: String,
    logo: String,
    // profile: String,
    level: {
        type: Schema.Types.ObjectId,
        ref: "SchoolLevel"
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    teachers: [{
        type: Schema.Types.ObjectId,
        ref: "Teacher"
    }],
    students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }]
});

module.exports = mongoose.model("School", schoolSchema);