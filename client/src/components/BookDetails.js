import React from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries/queries'

class BookDetails extends React.Component {
  displayBookDetails = () => {
    const { book } = this.props.data
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>Written by {book.author.name}</p>
          <p>Other books by this author</p>
          <ul className="other-books">
            {book.author.books.map(book => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <h1>No book selected.</h1>
        </div>
      )
    }
  }
  render() {
    return <div id="book-details">{this.displayBookDetails()}</div>
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails)
