import React, { Component } from "react";

class Book extends Component {
  render() {
    const { book, changeBookShelf } = this.props;
    const noThumbLink =
      "https://books.google.com/googlebooks/images/no_cover_thumb.gif";

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : noThumbLink
              })`,
            }}
          ></div>

          <div className="book-shelf-changer">
            <select
              onChange={(e) => changeBookShelf(book, e.target.value)}
              value={book.shelf ? book.shelf : "none"}
            >
              <option value="moveto" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors} </div>
      </div>
    );
  }
}
export default Book;
