// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const express = require('express')
const db = require('./json-server/db.js')
const routes = require('./json-server/routes.json')
const router = jsonServer.router( db )

const middlewares = jsonServer.defaults({
    static: 'node_modules/json-server/public',
})

public_folder = __dirname + "/public";
console.log(public_folder)

// server.use("/static", express.static(__dirname + "./node_modules/json-server/public"));

server.use( middlewares )

server.use( require('./json-server/middlewares.js') )

// Add this before server.use(router)
server.use( jsonServer.rewriter(routes) )

server.use(router)
server.use("/static", express.static( public_folder ));
server.listen(3000, () => {
    console.log('JSON Server is running')
})
