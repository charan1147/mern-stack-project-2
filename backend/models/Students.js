const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Corrected "require" to "required"
    age: { type: Number, required: true },
    course: { type: String, required: true },
});

// Corrected `mongoose.module` to `mongoose.model`
module.exports = mongoose.model("TriveniSchool",StudentSchema);
