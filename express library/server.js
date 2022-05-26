// for file manager
const fs = require('fs')

// import express library
const express = require('express');
const { join } = require('path');
const app = express()

// web page..
let ans = new Array();
// inside the json file
let employee;

// readFile - index.html
const data = fs.readFileSync('./employee.json', 'utf-8')
employee = JSON.parse(data)

// app listening
app.listen(3000, () => {
   console.log('App listening..');
})

// get request
app.get('/', (req, res) => {
   res.send(
      employee.filter(item => (item.name && item.age))
         .map(item => (`<p>Name: ${item.name}, Age: ${item.age}</p>`)).join('')
   )
})