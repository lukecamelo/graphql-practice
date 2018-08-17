import React from 'react'
import { graphql, compose } from 'react-apollo'
import { getAuthorsQuery, addBookMutation } from '../queries/queries'

class AddBook extends React.Component {
  state = {
    name: '',
    genre: '',
    authorId: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitForm = e => {
    e.preventDefault()
    const { name, genre, authorId } = this.state
    this.props.addBookMutation({
      variables: {
        name,
        genre,
        authorId
      }
    })
  }

  displayAuthors = () => {
    const { getAuthorsQuery } = this.props
    if (getAuthorsQuery.loading) {
      return <option disabled>Loading authors...</option>
    } else {
      return getAuthorsQuery.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        )
      })
    }
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            onChange={this.onChange}
            name="name"
            value={this.state.name}
          />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={this.onChange}
            name="genre"
            value={this.state.genre}
          />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={this.onChange} name="authorId">
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    )
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook)
