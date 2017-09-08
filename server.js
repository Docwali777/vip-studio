require('babel-core/register')({
  presets: ['es2015', 'react', 'stage-0']
})

const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path');
const ejs = require('ejs');
const requestHandler = require('./requestHandler')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(requestHandler)

app.listen(PORT, ()=>{
  console.log(`server: ${PORT}`);
})
