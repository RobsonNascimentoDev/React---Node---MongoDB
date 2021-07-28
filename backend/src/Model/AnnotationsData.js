const mongoose = require('mongoose');

const AnnotationsSchema = new mongoose.Schema({
    title: String,
    note: String,
    priority: Boolean,
});

module.exports = mongoose.model('Annotations', AnnotationsSchema);