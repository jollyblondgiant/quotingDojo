const   mongoose = require('mongoose'),
        Quote = mongoose.model('Quote'),
        quotes = require('../controllers/quotes')
module.exports = function(app){
    app.get('/', function(req, res){
        quotes.index(req, res)
    })
    app.get('/quotes', function(req, res){
        quotes.create(req, res)
    })
    app.post('/quotes', function(req, res){
        quotes.destroy(req, res)
    })
}