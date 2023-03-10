import React, { Component } from "react";
import BookShelf from "./BookShelf";

class ShelfChanger extends Component {
  render() {
    const currentlyReading = this.props.books.filter(
      (b) => b.shelf === "currentlyReading"
    );
    const wantToRead = this.props.books.filter((b) => b.shelf === "wantToRead");
    const alreadyRead = this.props.books.filter((b) => b.shelf === "read");
    return (
      <div className="list-books-content">
        <div>
          <BookShelf
            books={currentlyReading}
            shelfTitle="Currently Reading"
            changeBookShelf={this.props.changeBookShelf}
          />
          <BookShelf
            books={wantToRead}
            shelfTitle="Want To Read"
            changeBookShelf={this.props.changeBookShelf}
          />
          <BookShelf
            books={alreadyRead}
            shelfTitle="Read"
            changeBookShelf={this.props.changeBookShelf}
          />
        </div>
      </div>
    );
  }
}

export default ShelfChanger;
