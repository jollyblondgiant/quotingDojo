const   mongoose = require('mongoose'),
        Quote = mongoose.model('Quote')
module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index');
    })
    app.get('/quotes', function(req, res){
        Quote.find({}, function(err, quotes){
            res.render('quotes', {'quotes':quotes})
        })
    })
    app.post('/quotes', function(req, res){
        var quote = new Quote
        quote.name = req.body.name
        quote.text = req.body.quote
        quote.save(function(err){
            if(err){
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message)
                }
                res.redirect('/')
            }else{
                res.redirect('quotes')
            }
        })
    })
}