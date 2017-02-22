const express = require('express')
const router = express.Router()
const database = require('../database/db.js')

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
  const name = request.body.name
  const email = request.body.email
  const dates = request.body.dates
  const message = request.body.message
  const option = request.body.option
  if (!Array.isArray(request.body.options)){
    request.body.options = 'options' in request.body ? [request.body.options] : []
  }

  database.createContact(name, email, dates, message)
    .then(contact => {
      response.redirect('/contact')
    })
    .catch(error => {
      response.send('error')
    })

})

module.exports = router