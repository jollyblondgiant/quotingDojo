var   Quote = require('../models/quote'),
        mongoose = require('mongoose'),
        Quote = mongoose.model('Quote')
module.exports = {
    index: function(req, res){
        res.render('index');
    },
    create: function(req, res){
        console.log("HELLO")
        Quote.find({}, function(err, quotes){
            console.log(quotes)
            res.render('quotes', {'quotes':quotes})
        })

    },
    destroy: function(req, res){
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
    }
}