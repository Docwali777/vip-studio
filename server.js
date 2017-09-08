const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path');

app.use(express.static('public'))
const publicPath = path.resolve(__dirname, 'public', 'index.html')

app.get('/*', (req, res)=>{
  res.sendFile(publicPath)
})

app.listen(PORT, ()=>{
  console.log(`server: ${PORT}`);
})
