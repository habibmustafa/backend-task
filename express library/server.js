// for file manager
const fs = require('fs')

// import express library
const express = require('express');
const app = express()

// inside the json file
let employee;

// readFile - employee.json
try {
   const data = fs.readFileSync('./employee.json', 'utf-8')
   employee = JSON.parse(data)
} catch(err) {
   console.log(err);
}

// app listening
app.listen(3000, () => {
   console.log('App listening..');
})

// get request
app.get('/', (req, res) => {
   res.send(
      employee.filter(item => ({...item}))
         .map(item => (`<p>Name: ${item.name}, Age: ${item.age}</p>`)).join('')
   )
})