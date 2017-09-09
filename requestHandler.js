
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext, createRoutes } from 'react-router'
import Routes from './src/routes'
console.log(createRoutes);
const cRoutes = createRoutes(Routes)


// const React = require('react');
// let {renderToString} = require('react-dom/server')
// let {match, RouterContext, createRoutes } = require('react-router')
// let Routes = require('./src/routes')
//
// const cRoutes = createRoutes(Routes)

function handleRequest(req, res){
  const Routes = {
    routes: Routes,
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
