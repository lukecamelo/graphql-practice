import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

class BookList extends Component {
  displayBooks = () => {
    let { data } = this.props
    if (data.loading) {
      return (
        <div>
          <h1>Loading Books...</h1>
        </div>
      )
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>
      })
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList)
