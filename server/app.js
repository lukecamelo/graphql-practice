const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

app.use('/graphql', graphqlHTTP({}))

app.listen(8080, () => {
  console.log('reporting live from localhost:/8080 :-)')
})
