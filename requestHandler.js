
const React = require('react');
let {renderToString} = require('react-dom/server')
let {match, RouterContext, createRoutes } = require('react-router')
let Routes = require('./src/routes')

const cRoutes = createRoutes(Routes)

function handleRequest(req, res){
  const Routes = {
    routes: cRoutes,
    location: req.url,

  }
  match(Routes, (err, redirect, props)=>{
      if(err){
        res.status(500).send('Eror Fullfilling request')
      } else if(redirect) {
        res.status(302, redirect.pathname + redirect.search)
      } else if(props){

        const reactComponent = renderToString(
          <RouterContext {...props} />
        )

        res.status(200).render('index', {reactComponent})
      } else {
        // res.status(404).send('Not Found')
      }
  })
}

module.exports = handleRequest
