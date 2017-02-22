const express = require('express')
const router = express.Router()

router.get('/', function(request, response){
  response.render('splash')
})

router.get('/home', function(request, response){
  response.render('home')
})

module.exports = router