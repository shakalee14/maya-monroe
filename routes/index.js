const express = require('express')
const router = express.Router()

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
  response.render('contact')
})

module.exports = router