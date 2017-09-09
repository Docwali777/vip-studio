if(process.env.NODE_ENV !== 'preduction'){
  require('babel-register')({
    presets: ["es2015", "react", "stage-0"]
  })
}


const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path');
const ejs = require('ejs');
const requestHandler = require('../requestHandler')



app.set('view engine', 'ejs')
// app.set('views', '/public/views')
app.use(express.static('public'))

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(requestHandler)

app.listen(PORT, ()=>{
  console.log(`server: ${PORT}`);
})
