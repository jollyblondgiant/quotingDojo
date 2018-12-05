const mongoose = require('mongoose')
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 5},
    text: {type: String, required: true, maxlength: 255}
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema);
