// Importing required modules
import { GraphQLServer } from 'graphql-yoga'
import startDB from './config/db.config'
import models from './models/index'
// Change for your resolvers
import resolvers from './graphql/default.resolvers'
import morgan from 'morgan'
import winston from 'winston'

// Defining values for db connection
const db = startDB({
  user: '',
  pwd: '',
  url: '',
  db: ''
})

// Defining options
const opts = {
  port: 9000
}

// Defining context
const ctx = {
  models,
  db
}

// Defining server
const Server = new GraphQLServer({
  // Change for your Schema
  typeDefs: `${__dirname}/src/graphql/default.schema.graphql`,
  resolvers,
  context
})

Server.express.use(morgan('combined', { stream: winston.stream }))

Server.start(opts, () => {
  console.log('Authentication Service Running On:' + ' ' + 'http://localhost:' + opts.port)
})

module.exports = Server
