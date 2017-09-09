
const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path');
const ejs = require('ejs');
const requestHandler = require('../requestHandler')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(function(req, res, next) {
    var originalPath = req.path;
    if(!originalPath.endsWith(".js")) {
        next();
        return;
    }
    try {
        var stats = fs.statSync(path.join("public", `${req.path}.gz`));
        res.append('Content-Encoding', 'gzip');
        res.setHeader('Vary', 'Accept-Encoding');
        res.setHeader('Cache-Control', 'public, max-age=512000');
        req.url = `${req.url}.gz`;

        var type = mime.lookup(path.join("public", originalPath));
        if (typeof type != 'undefined') {
            var charset = mime.charsets.lookup(type);
            res.setHeader('Content-Type', type + (charset ? '; charset=' + charset : ''));
        }
    } catch(e) {
    }
    next();
})


app.use(requestHandler)

app.listen(PORT, ()=>{
  console.log(`server: ${PORT}`);
})
