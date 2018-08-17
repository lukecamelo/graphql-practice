const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(
  'mongodb://lukecamelo:pandab3ar@ds223542.mlab.com:23542/gql-books',
  {
    useNewUrlParser: true
  }
)
mongoose.connection.once('open', () => {
  console.log('connected to database!')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(8080, () => {
  console.log('reporting live from localhost:8080 :-)')
})
