const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema(
    {
        name: String,
        surname: String,
        age: Number,
        specialism: String 
    }
);

module.exports = mongoose.model('teacher', teacherSchema);