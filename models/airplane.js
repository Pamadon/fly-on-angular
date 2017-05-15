var mongoose = require('mongoose');

var AirplaneSchema = new mongoose.Schema({
    company: String,
    model: String,
    engines: Number,
    img: String
});

module.exports = mongoose.model('Airplane', AirplaneSchema);
