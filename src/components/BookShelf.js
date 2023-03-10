import React, { Component } from "react";
import BookList from "./BookList";

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.length > 0 ? (
              this.props.books.map((book, index) => (
                <li key={index}>
                  <BookList
                    book={book}
                    changeBookShelf={this.props.changeBookShelf}
                  />
                </li>
              ))
            ) : (
              <div className="loading">Loading....</div>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
