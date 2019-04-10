const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()


app.get('/', function(req, res) {
    fs.readFile('view/index.html', function(err, data) {
      
    })
})

app.listen(5500, function() {
    console.log('express app is running...')
})