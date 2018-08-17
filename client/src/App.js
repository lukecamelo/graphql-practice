import React, { Component } from 'react'
import BookList from './components/BookList'
import { ApolloProvider } from 'react-apollo'

import ApolloClient from 'apollo-boost'
import AddBook from './components/AddBook'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>GraphQL Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
