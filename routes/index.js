var express = require('express')
var router = express.Router()
var database = require('../database/db.js')

router.get('/', function(request, response){
  response.render('splash')
})

router.get('/home', function(request, response){
  response.render('home')
})

router.get('/maya', function(request, response){
  response.render('maya')
})

router.get('/etiquette', function(request, response){
  response.render('etiquette')
})

router.get('/sessions', function(request, response){
  response.render('sessions')
})

router.get('/contact', function(request, response){
  database.getAllOptions()
  .then(options => {
    response.render('contact', {
      options: options
    })
  })
  .catch(error => {
    response.render('error', {error: error})
  })
})

router.post('/contact', (request, response, next) => {
  var body = request.body
  var name = body.name
  var email = body.email
  var dateOne = body.dateOne
  var dateTwo = body.dateTwo
  var dateThree = body.dateThree
  var message = body.message
  var options = body.options

  database.createContact(name, email, dateOne, dateTwo, dateThree, options, message)
    .then(contact => {
      response.render('thankyou')
    })
})

module.exports = router